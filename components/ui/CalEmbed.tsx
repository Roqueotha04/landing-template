"use client";

import { useEffect, useId } from "react";

// Official Cal.com "embed.js" bootstrap (no npm package needed).
// Auto-resizes the embedded iframe's height to match each step's content,
// unlike a plain <iframe> which needs a fixed height.
/* eslint-disable @typescript-eslint/no-explicit-any */
function loadCalEmbed(namespace: string) {
  const w = window as any;
  (function (C: any, A: string, L: string) {
    const p = (a: any, ar: unknown) => a.q.push(ar);
    const d = C.document;
    C.Cal =
      C.Cal ||
      function (...args: unknown[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api: any = (...apiArgs: unknown[]) => p(api, apiArgs);
          const namespaceArg = args[1];
          api.q = api.q || [];
          if (typeof namespaceArg === "string") {
            cal.ns[namespaceArg] = cal.ns[namespaceArg] || api;
            p(cal.ns[namespaceArg], args);
            p(cal, ["initNamespace", namespaceArg]);
          } else {
            p(cal, args);
          }
          return;
        }
        p(cal, args);
      };
  })(w, "https://app.cal.com/embed/embed.js", "init");

  w.Cal("init", namespace, { origin: "https://cal.com" });
  return w.Cal.ns[namespace];
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// Mirrors the palette in app/globals.css so the booker reads as part of the
// site instead of a third-party widget. Names go without the "--" prefix.
const darkThemeVars = {
  "cal-brand": "#C5A059",
  "cal-brand-emphasis": "#E5C158",
  "cal-brand-text": "#0A192F",
  "cal-bg": "#112240",
  "cal-bg-emphasis": "#1A2F4D",
  "cal-bg-subtle": "#0F1E38",
  "cal-bg-muted": "#0A192F",
  "cal-text": "#EAEAEA",
  "cal-text-emphasis": "#FFFFFF",
  "cal-text-subtle": "#9AA7BC",
  "cal-text-muted": "#6C7C93",
  "cal-border": "#1E3555",
  "cal-border-subtle": "#16283F",
  "cal-border-emphasis": "#2C4A72",
};

interface CalEmbedProps {
  calLink: string;
  className?: string;
}

export function CalEmbed({ calLink, className = "" }: CalEmbedProps) {
  const rawId = useId();
  const elementId = `cal-inline-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    const link = new URL(calLink).pathname.replace(/^\//, "");
    const cal = loadCalEmbed(elementId);

    cal("inline", {
      elementOrSelector: `#${elementId}`,
      calLink: link,
      config: { layout: "month_view", theme: "dark" },
    });
    cal("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: { dark: darkThemeVars },
    });
  }, [calLink, elementId]);

  return (
    <div
      id={elementId}
      className={`mx-auto w-full max-w-5xl min-h-[600px] overflow-hidden rounded-sm border border-white/10 bg-white/5 px-3 pt-5 pb-4 shadow-lg sm:px-5 md:px-6 md:pt-6 ${className}`}
    />
  );
}
