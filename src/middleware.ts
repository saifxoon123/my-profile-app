import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // 🟢 public routes (login/register/api)
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/api/register")
  ) {
    return NextResponse.next();
  }

  // 🔒 protect profile route
  if (pathname.startsWith("/profile")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// 🔥 middleware only works on /profile
export const config = {
  matcher: ["/profile"],
};