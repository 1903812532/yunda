import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes (except login)
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.includes("/login") &&
    !request.nextUrl.pathname.includes("/forgot-password")
  ) {
    const authToken = request.cookies.get("auth-token")

    if (!authToken || authToken.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}
