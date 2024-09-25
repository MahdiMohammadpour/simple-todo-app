import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hasLocale = request.cookies.has("NEXT_LOCALE");
  if (!hasLocale) {
    const response = NextResponse.next();
    response.cookies.set(
      "NEXT_LOCALE",
      process.env.NEXT_PUBLIC_DEF_LOCALE || "fa"
    );
    return response;
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
