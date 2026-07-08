// Ready-to-run small-business workflows. Each is a canned prompt that drives
// the agent through a real multi-step job using the connector tools.
export const workflows = [
  {
    id: "invoice-chaser",
    title: "Chase overdue invoices",
    icon: "💸",
    category: "Finance",
    blurb: "Rank overdue invoices and draft a reminder for each — ready for your approval.",
    prompt: "Look up all OVERDUE invoices in QuickBooks. Rank them by amount (largest first) and how many days overdue. Then draft a payment-reminder email for EACH overdue invoice using draft_invoice_reminder — use a friendly tone for the first reminder. After drafting them all, give me a short summary table of what you queued and the total dollars being chased."
  },
  {
    id: "payroll-forecast",
    title: "Plan payroll with confidence",
    icon: "🧮",
    category: "Finance",
    blurb: "Settle cash against incoming PayPal settlements and forecast the next 30 days.",
    prompt: "Help me plan payroll. Pull my QuickBooks cash position and PayPal balance plus PENDING settlements. Estimate the cash I can safely expect over the next 30 days (available balance + pending settlements + realistic collection of overdue invoices). Tell me plainly whether I can cover a payroll run of about $6,500 this cycle, list the risks, and rank what's overdue that I should collect first."
  },
  {
    id: "month-close",
    title: "Close the month",
    icon: "📚",
    category: "Finance",
    blurb: "Reconcile books vs settlements, flag mismatches, write a plain-English P&L.",
    prompt: "Do a month-end close for June. Pull QuickBooks invoices and PayPal settlements. Reconcile paid invoices against settlements and flag anything that doesn't match or looks off (including refunds and disputes). Then write a plain-English profit summary and save it as a report titled 'June Month-End Close' using create_report so I can forward it to my accountant."
  },
  {
    id: "business-pulse",
    title: "Get a pulse on my business",
    icon: "📊",
    category: "Operations",
    blurb: "One page: cash position, sales trend, pipeline movement, this week's to-dos.",
    prompt: "Give me a one-page pulse on my business. Pull cash position (QuickBooks), PayPal balance, the sales pipeline and campaign performance (HubSpot). Summarize on one page: where my cash stands, what's overdue, biggest pipeline opportunities, how marketing is performing, and the top 3 things I should do this week. Save it as a report titled 'Weekly Business Pulse' with create_report."
  },
  {
    id: "campaign-planner",
    title: "Plan my next campaign",
    icon: "📣",
    category: "Marketing",
    blurb: "Analyze campaign performance and draft the next promo strategy.",
    prompt: "Plan my next marketing campaign. Analyze my HubSpot campaign performance (ROI by campaign and channel), identify what worked best, and propose a concrete next campaign: target audience, offer, channel, subject line ideas, and expected return. Save the plan as a report titled 'Next Campaign Plan' with create_report."
  },
  {
    id: "lead-triage",
    title: "Triage new leads",
    icon: "🎯",
    category: "Sales",
    blurb: "Prioritize new leads and draft a first reply to each.",
    prompt: "Triage my new HubSpot leads. Rank them by likely value/fit based on their notes, then draft a warm, personalized first reply for each using draft_lead_reply. Finish with a short prioritized list telling me who to call first and why."
  }
];

export function findWorkflow(id) {
  return workflows.find((w) => w.id === id);
}
