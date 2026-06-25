import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

function buildMeta(target: HTMLElement) {
  return {
    label: target.dataset.analyticsLabel || target.textContent?.trim() || "",
    question: target.dataset.analyticsQuestion || "",
    channel: target.dataset.analyticsChannel || "",
    destination: target.dataset.analyticsDestination || target.getAttribute("href") || "",
  };
}

export function SiteInstrumentation() {
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname || "/";
    const enteredAt = Date.now();
    let hasExited = false;

    const sendExit = () => {
      if (hasExited) {
        return;
      }
      hasExited = true;
      trackEvent("page_exit", page, { title: document.title }, { beacon: true, durationMs: Date.now() - enteredAt });
    };

    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-analytics-event]");
      if (!target) {
        return;
      }

      trackEvent(target.dataset.analyticsEvent || "custom_click", page, buildMeta(target));
    };

    trackEvent("page_view", page, { title: document.title });
    document.addEventListener("click", handleClick);
    window.addEventListener("pagehide", sendExit);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("pagehide", sendExit);
      sendExit();
    };
  }, [location.pathname]);

  return null;
}
