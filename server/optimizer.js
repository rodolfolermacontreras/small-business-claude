// Inventory forecasting + reorder optimization.
// Method (v1, intentionally simple & explainable):
//   1. Seasonal index per calendar month  = avg sales that month / overall avg
//   2. Deseasonalize history, take a moving average of the last 3 months => current "level"
//   3. Forecast(month) = level * seasonalIndex(that month)
//   4. Safety stock  = z * dailySigma * sqrt(leadTime)         (95% service, z=1.65)
//      Reorder point = demand during lead time + safety stock
//      Order qty     = bring stock up to (lead time + review period) of cover + safety stock
// Everything is deterministic server-side math so the numbers are always correct;
// the AI only explains the results, it never invents them.

const Z_95 = 1.65;          // service level ~95%
const REVIEW_DAYS = 30;     // how often the owner reviews/orders (monthly)
const DAYS_PER_MONTH = 30;

const mean = (a) => (a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0);
const stdev = (a) => {
  if (a.length < 2) return 0;
  const m = mean(a);
  return Math.sqrt(mean(a.map((x) => (x - m) ** 2)));
};
const round = (n, d = 0) => {
  const f = 10 ** d;
  return Math.round(n * f) / f;
};

function startMonthIndex(historyStart) {
  // "YYYY-MM" -> 0-based calendar month of the first data point
  const mm = parseInt(String(historyStart).split("-")[1], 10);
  return (mm - 1) || 0;
}

// Seasonal index for each calendar month (0..11), normalized around 1.0
function seasonalIndices(series, startCal) {
  const overall = mean(series) || 1;
  const byMonth = Array.from({ length: 12 }, () => []);
  series.forEach((v, i) => byMonth[(startCal + i) % 12].push(v));
  return byMonth.map((vals) => (vals.length ? mean(vals) / overall : 1));
}

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export function optimizeProduct(p, historyStart, asOf = new Date()) {
  const series = p.monthly_units || [];
  const startCal = startMonthIndex(historyStart);
  const n = series.length;

  const seasonal = seasonalIndices(series, startCal);
  const deseason = series.map((v, i) => v / (seasonal[(startCal + i) % 12] || 1));

  // Current baseline level = moving average of last 3 deseasonalized months
  const level = mean(deseason.slice(-3));
  // Variability of monthly demand (deseasonalized) drives safety stock
  const sigmaMonthly = stdev(deseason.slice(-12));

  // Forecast next 6 months (calendar-aware)
  const forecast = [];
  for (let k = 1; k <= 6; k++) {
    const cal = (startCal + n + (k - 1)) % 12;
    forecast.push({ month: MONTH_NAMES[cal], units: round(level * (seasonal[cal] || 1)) });
  }
  const nextMonth = forecast[0].units;

  const dailyDemand = nextMonth / DAYS_PER_MONTH;
  const leadDays = p.lead_time_days || 7;
  const sigmaDaily = sigmaMonthly / Math.sqrt(DAYS_PER_MONTH);

  const safetyStock = Z_95 * sigmaDaily * Math.sqrt(leadDays);
  const leadTimeDemand = dailyDemand * leadDays;
  const reorderPoint = leadTimeDemand + safetyStock;

  const targetLevel = dailyDemand * (leadDays + REVIEW_DAYS) + safetyStock;
  const minOrder = p.min_order_qty || 1;
  let orderQty = Math.max(0, targetLevel - p.on_hand);
  if (orderQty > 0 && minOrder > 1) orderQty = Math.ceil(orderQty / minOrder) * minOrder;
  orderQty = Math.round(orderQty);

  const daysOfCover = dailyDemand > 0 ? p.on_hand / dailyDemand : 999;
  const daysUntilReorder = dailyDemand > 0 ? (p.on_hand - reorderPoint) / dailyDemand : 999;

  let status = "healthy";
  if (p.on_hand <= reorderPoint) status = "reorder_now";
  else if (daysOfCover > (leadDays + REVIEW_DAYS) * 2.5) status = "overstock";

  const addDays = (d) => {
    const dt = new Date(asOf);
    dt.setDate(dt.getDate() + Math.max(0, Math.floor(d)));
    return dt.toISOString().slice(0, 10);
  };

  return {
    sku: p.sku,
    name: p.name,
    unit: p.unit,
    category: p.category,
    supplier: p.supplier,
    on_hand: p.on_hand,
    unit_cost: p.unit_cost,
    lead_time_days: leadDays,
    min_order_qty: minOrder,
    forecast_next_month: nextMonth,
    forecast_6mo: forecast,
    daily_demand: round(dailyDemand, 2),
    safety_stock: round(safetyStock),
    reorder_point: round(reorderPoint),
    days_of_cover: round(daysOfCover),
    order_by: status === "reorder_now" ? addDays(0) : addDays(daysUntilReorder),
    recommended_order_qty: status === "overstock" ? 0 : orderQty,
    order_cost: round((status === "overstock" ? 0 : orderQty) * p.unit_cost, 2),
    status,
    history_recent: series.slice(-12)
  };
}

export function optimizeAll(products, historyStart, asOf = new Date()) {
  return products.map((p) => optimizeProduct(p, historyStart, asOf));
}
