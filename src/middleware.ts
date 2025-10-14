import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/services') {
    return NextResponse.redirect(new URL('/services/all', request.url))
  }
}
 
export const config = {
  matcher: '/services',
}