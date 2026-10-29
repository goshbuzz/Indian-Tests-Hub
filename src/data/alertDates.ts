import type { Alert } from "@/lib/types";

/** Use the checked date for undated sources without presenting it as publication. */
export function alertDate(alert: Alert) {
  return (alert.published_at ?? alert.checked_at).slice(0, 10);
}

export function alertDateLabel(alert: Alert, hi = false) {
  const label = alert.published_at ? (hi ? "प्रकाशित" : "Published") : (hi ? "जाँचा" : "Checked");
  return `${label} ${alertDate(alert)}`;
}

export function newestAlertFirst(a: Alert, b: Alert) {
  return alertDate(b).localeCompare(alertDate(a));
}
