import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);

  const isLoggedIn =
    request.cookies.get("sb-access-token") ||
    request.cookies.get("sb-refresh-token");

  const protectedRoutes = ["/library", "/profile", "/upload"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/library/:path*",
    "/profile/:path*",
    "/upload/:path*",
  ],
};