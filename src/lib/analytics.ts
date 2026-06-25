type AnalyticsMeta = Record<string, string | number | boolean | null | undefined>;

const DEFAULT_ANALYTICS_ENDPOINT = "/ops/api/track";
const SITE_KEY = "group";
const SESSION_STORAGE_KEY = "dakang:group:session";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function resolveAnalyticsEndpoint() {
  const configuredBaseUrl = String(import.meta.env.VITE_ANALYTICS_BASE_URL || "").trim();
  if (!configuredBaseUrl) {
    return DEFAULT_ANALYTICS_ENDPOINT;
  }
  return `${trimTrailingSlash(configuredBaseUrl)}/api/track`;
}

const ANALYTICS_ENDPOINT = resolveAnalyticsEndpoint();

function getSessionId() {
  if (typeof window === "undefined") {
    return "server";
  }

  const stored = window.localStorage.getItem(SESSION_STORAGE_KEY);
  if (stored) {
    return stored;
  }

  const sessionId = `${SITE_KEY}-${crypto.randomUUID()}`;
  window.localStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  return sessionId;
}

export function trackEvent(event: string, page: string, meta: AnalyticsMeta = {}, options: { beacon?: boolean; durationMs?: number } = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    site: SITE_KEY,
    page,
    event,
    sessionId: getSessionId(),
    durationMs: options.durationMs ?? 0,
    meta,
  };

  const body = JSON.stringify(payload);

  if (options.beacon && navigator.sendBeacon) {
    navigator.sendBeacon(
      ANALYTICS_ENDPOINT,
      new Blob([body], {
        type: "application/json",
      }),
    );
    return;
  }

  void fetch(ANALYTICS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    keepalive: options.beacon ?? false,
  }).catch(() => undefined);
}
