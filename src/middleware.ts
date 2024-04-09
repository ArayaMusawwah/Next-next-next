import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import withAuth from "./middlewares/withAuth"

/* export const middleware = (req: NextRequest) => {
  const isLogin = false
  return isLogin
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/products", req.url))
}

export const config = {
  matcher: "/products"
} */

export const mainMiddleware = (req: NextRequest) => NextResponse.next()

export default withAuth(mainMiddleware, ["/profile", "/products"])
