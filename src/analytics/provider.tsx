"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { useAnalyticsAllowed } from "@/analytics/consent";
import { AnalyticsBridge } from "@/analytics/bridge";
import { analyticsConfig } from "@/config/analytics";
import { featureFlags } from "@/config/feature-flags";

/**
 * Modular analytics shell — only loads scripts when consent + flags allow.
 */
export function AnalyticsProvider() {
  const allowed = useAnalyticsAllowed();
  const flags = featureFlags.analytics;

  return (
    <>
      <AnalyticsBridge />

      {flags.vercel ? <Analytics /> : null}
      {flags.speedInsights ? <SpeedInsights /> : null}

      {allowed && flags.ga4 && analyticsConfig.ga4MeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4MeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', { analytics_storage: 'granted' });
              gtag('config', '${analyticsConfig.ga4MeasurementId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {allowed && flags.gtm && analyticsConfig.gtmId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${analyticsConfig.gtmId}');
          `}
        </Script>
      ) : null}

      {allowed && flags.plausible && analyticsConfig.plausibleDomain ? (
        <Script
          defer
          data-domain={analyticsConfig.plausibleDomain}
          src={analyticsConfig.plausibleSrc}
          strategy="afterInteractive"
        />
      ) : null}

      {allowed && flags.clarity && analyticsConfig.clarityId ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${analyticsConfig.clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}
