import { NextResponse } from "next/server";

import { engagementService } from "@/services/content";

/**
 * Newsletter API — persists via CMS adapter (Payload or static).
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; source?: string };

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    const result = await engagementService.subscribe({
      email: body.email.trim().toLowerCase(),
      source: body.source ?? "website",
    });

    return NextResponse.json({
      ok: true,
      id: result.id,
      message: "Subscribed",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 500 },
    );
  }
}
