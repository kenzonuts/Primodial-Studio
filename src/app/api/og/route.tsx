import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

import { SITE_NAME } from "@/constants/site";

export const runtime = "edge";

/**
 * Dynamic OG image API — /api/og?title=&description=&type=
 * Ready for blog posts and portfolio case studies.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || SITE_NAME;
  const description =
    searchParams.get("description") || "Building Digital Products That Matter.";
  const type = searchParams.get("type") || "Page";

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
          "radial-gradient(circle at 15% 15%, rgba(79,140,255,0.32), transparent 42%), radial-gradient(circle at 85% 75%, rgba(124,92,255,0.26), transparent 40%), #050505",
        color: "#FAFAFA",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 26, fontWeight: 600 }}>{SITE_NAME}</div>
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(250,250,250,0.5)",
          }}
        >
          {type}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            fontSize: title.length > 48 ? 52 : 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(250,250,250,0.68)",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          height: 4,
          width: "100%",
          background:
            "linear-gradient(90deg, #4F8CFF 0%, #7C5CFF 50%, transparent 100%)",
        }}
      />
    </div>,
    { width: 1200, height: 630 },
  );
}
