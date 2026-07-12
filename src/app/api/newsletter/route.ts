import { NextResponse } from "next/server";

import { engagementService } from "@/services/content";
import { isValidEmail, sanitizeEmail } from "@/utils/sanitize";

/**
 * Newsletter API — sanitizes email and persists via CMS adapter.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; source?: string };

    const email =
      typeof body.email === "string" ? sanitizeEmail(body.email) : "";

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    const result = await engagementService.subscribe({
      email,
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
