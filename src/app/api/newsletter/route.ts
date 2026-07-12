import { NextResponse } from "next/server";

/**
 * Newsletter API — future email service integration.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    // Future: ESP / CMS audience sync
    return NextResponse.json({
      ok: true,
      id: `newsletter_${Date.now()}`,
      message: "Subscribed",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 500 },
    );
  }
}
