import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
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
        username: {
          label: "Username",
          type: "text",
          placeholder: "John"
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "John@doe.com"
        },
        password: { label: "Password", type: "password", placeholder: "******" }
      },
      authorize: async (credentials) => {
        const { username, password, email } = credentials as {
          username: string
          email: string
          password: string
        }
        const user: any = { id: 1, username, password, email }

        return user ? user : null
      }
    })
  ],
  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials") {
        token.email = user.email
      }
      return token
    },
    session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email
      }
      return session
    }
  }
}

export default NextAuth(authOptions)
