import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const middleware = (req: NextRequest) => {
  const isLogin = false
  return isLogin
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/products", req.url))
}

export const config = {
  matcher: "/products"
}
