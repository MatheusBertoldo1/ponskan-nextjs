// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // No Middleware, pegamos o cookie direto do objeto da requisição
  const token = request.cookies.get('token')?.value

  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard')

  if (isDashboardPage && !token) {
    // Se não tem o token manda pra login
    // Puxa a url negada (www.site.com/dashboard) e troca a ultima parte por /login --> redireciona
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// O matcher define onde o middleware deve atuar
export const config = {
  matcher: ['/dashboard/:path*']
}