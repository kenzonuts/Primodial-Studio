import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/constants/site";

export const runtime = "edge";
export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph image — brand mark + tagline.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background:
          "radial-gradient(circle at 20% 20%, rgba(79,140,255,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(124,92,255,0.28), transparent 40%), #050505",
        color: "#FAFAFA",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(250,250,250,0.55)",
        }}
      >
        Creative Technology Studio
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "rgba(250,250,250,0.72)",
            maxWidth: 880,
            lineHeight: 1.35,
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          color: "rgba(250,250,250,0.45)",
        }}
      >
        <span>primordial.studio</span>
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#4F8CFF",
          }}
        />
      </div>
    </div>,
    { ...size },
  );
}
