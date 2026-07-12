import { NextResponse, type NextRequest } from "next/server";

import { buildSecurityHeaders } from "@/config/security";

/**
 * Edge middleware — security headers + lightweight request tagging.
 * Admin/CMS routes get a softer CSP so Payload UI keeps working.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const path = request.nextUrl.pathname;
  const isAdmin = path.startsWith("/admin") || path.startsWith("/api");

  for (const header of buildSecurityHeaders()) {
    if (isAdmin && header.key === "Content-Security-Policy") {
      // Payload admin needs broader script/style allowances
      response.headers.set(
        "Content-Security-Policy",
        [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data:",
          "connect-src 'self' https: blob:",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; "),
      );
      continue;
    }
    response.headers.set(header.key, header.value);
  }

  response.headers.set("X-Request-Path", path);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
