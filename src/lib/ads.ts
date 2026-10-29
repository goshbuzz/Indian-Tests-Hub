/**
 * Ads and analytics are disabled in the Indian Tests Hub build.
 * No ad-network IDs, scripts or tracking tags are shipped.
 */
export const ADS_ENABLED = false;
export const ANALYTICS_ENABLED = false;

export function isStandaloneApp(): boolean {
  return false;
}
