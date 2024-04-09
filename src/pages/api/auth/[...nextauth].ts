import { signIn } from "@/lib/firebase/service"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
// import { UserType } from "@/types/Types"

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "John@doe.com"
        },
        password: { label: "Password", type: "password", placeholder: "******" }
      },
      authorize: async (credentials) => {
        const { password, email } = credentials as {
          email: string
          password: string
        }
        const user: any = await signIn({ email })

        if (user) {
          const confirmPassword = await compare(password, user.password)
          if (confirmPassword) return user
          return null
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email
        token.username = user.username
        token.role = user.role
      }
      return token
    },
    session({ session, token }: any) {
      if ("email" in token) session.user.email = token.email
      if ("username" in token) session.user.username = token.username
      if ("role" in token) session.user.role = token.role
      return session
    }
  },
  pages: {
    signIn: "/auth/login"
  }
}

export default NextAuth(authOptions)
