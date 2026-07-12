import { NextResponse } from "next/server";

import { engagementService } from "@/services/content";

/**
 * Contact form API — validates input and persists via CMS adapter (Payload or static).
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const fullName =
      typeof body.fullName === "string" ? body.fullName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!fullName || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    const result = await engagementService.submitContact({
      fullName,
      company: typeof body.company === "string" ? body.company : undefined,
      email,
      phone: typeof body.phone === "string" ? body.phone : undefined,
      projectType:
        typeof body.projectType === "string" ? body.projectType : undefined,
      budget: typeof body.budget === "string" ? body.budget : undefined,
      description:
        typeof body.description === "string" ? body.description : undefined,
      source: typeof body.source === "string" ? body.source : "website",
      locale: typeof body.locale === "string" ? body.locale : "en",
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
