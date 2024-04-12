import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FaGithub, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { push, query } = useRouter()

  const callbackUrl: any = query.callbackUrl || "/"

  const handleLogin = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl
      })

      !res?.error ? push(callbackUrl) : setError(res?.error)
    } catch (err: any) {
      setError("Incorrect Username / password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-full w-full items-center justify-center bg-zinc-300 px-4 py-12 sm:px-6 lg:px-8">
      <form onSubmit={handleLogin} className="space-y-6">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          />
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() =>
              signIn("google", {
                callbackUrl,
                redirect: false
              })
            }
            className="rounded-full bg-blue-500 p-2 text-white transition duration-300 hover:bg-blue-600"
          >
            <FaGoogle />
          </button>
          <button
            type="button"
            className="rounded-full bg-gray-700 p-2 text-white transition duration-300 hover:bg-gray-800"
          >
            <FaGithub />
          </button>
          <button
            type="button"
            className="rounded-full bg-blue-700 p-2 text-white transition duration-300 hover:bg-blue-800"
          >
            <FaLinkedinIn />
          </button>
          <button
            type="button"
            className="rounded-full bg-blue-400 p-2 text-white transition duration-300 hover:bg-blue-500"
          >
            <FaTwitter />
          </button>
        </div>
        <button
          className="w-full rounded-md bg-slate-700 px-5 py-2 text-white"
          type="submit"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <Link
          href={"/auth/register"}
          className="mt-10 block text-center text-sm text-gray-500"
        >
          Dont have an account?
        </Link>
      </form>
    </div>
  )
}
export default LoginPage
