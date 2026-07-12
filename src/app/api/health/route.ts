import { NextResponse } from "next/server";

import { env } from "@/config/env";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Health check — used by uptime monitors and deploy probes.
 * GET /api/health
 */
export async function GET() {
  const started = Date.now();

  const body = {
    ok: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version ?? "0.1.0",
    env: env.appEnv,
    cms: env.CMS_PROVIDER,
    uptimeMs: Math.round(process.uptime() * 1000),
    latencyMs: Date.now() - started,
  };

  return NextResponse.json(body, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
