import { NextResponse } from "next/server";

import { engagementService } from "@/services/content";
import { isValidEmail, sanitizeEmail, sanitizeText } from "@/utils/sanitize";

/**
 * Contact form API — validates + sanitizes input, persists via CMS adapter.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const fullName =
      typeof body.fullName === "string" ? sanitizeText(body.fullName, 120) : "";
    const email =
      typeof body.email === "string" ? sanitizeEmail(body.email) : "";

    if (!fullName || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    const result = await engagementService.submitContact({
      fullName,
      company:
        typeof body.company === "string"
          ? sanitizeText(body.company, 160)
          : undefined,
      email,
      phone:
        typeof body.phone === "string"
          ? sanitizeText(body.phone, 40)
          : undefined,
      projectType:
        typeof body.projectType === "string"
          ? sanitizeText(body.projectType, 80)
          : undefined,
      budget:
        typeof body.budget === "string"
          ? sanitizeText(body.budget, 40)
          : undefined,
      description:
        typeof body.description === "string"
          ? sanitizeText(body.description, 2000)
          : undefined,
      source:
        typeof body.source === "string"
          ? sanitizeText(body.source, 40)
          : "website",
      locale:
        typeof body.locale === "string" ? sanitizeText(body.locale, 12) : "en",
    });

    return NextResponse.json({
      ok: true,
      id: result.id,
      message: "Received",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 500 },
    );
  }
}
