import { NextResponse } from "next/server";

/**
 * Contact form API — future CRM / email service integration.
 * Currently accepts JSON and returns a stub success response.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (
      typeof body.email !== "string" ||
      typeof body.fullName !== "string" ||
      !body.email ||
      !body.fullName
    ) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    // Future: forward to CRM / email provider / queue
    return NextResponse.json({
      ok: true,
      id: `contact_${Date.now()}`,
      message: "Received",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 500 },
    );
  }
}
