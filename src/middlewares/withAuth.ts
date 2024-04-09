import { getToken } from "next-auth/jwt"
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse
} from "next/server"

const withAuth = (middleware: NextMiddleware, requireAuth: string[] = []) => {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const { pathname } = req.nextUrl
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
      })
      if (!token) return NextResponse.redirect(new URL("/", req.url))
    }
    return middleware(req, next)
  }
}

export default withAuth
