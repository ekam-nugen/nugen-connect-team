import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const provider = request.cookies.get('provider')?.value;
  if (
    request.nextUrl.pathname.startsWith('/dashboard') ||
    request.nextUrl.pathname.startsWith('/user')
  ) {
    if (provider) {
      request.nextUrl.pathname.startsWith('/dashboard');
    } else if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path*', '/user/:path*'] };
