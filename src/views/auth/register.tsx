import { Button } from "@/components/ui/button"
import Email from "next-auth/providers/email"
import { useRouter } from "next/router"
import { useState } from "react"

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { push } = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })

    const result = await res.json()

    if (result.status) {
      e.target.reset()
      setIsLoading(false)
      push("/auth/login")
    } else {
      setIsLoading(false)
      setError(res.status === 400 ? result.message : "")
    }
  }

  return (
    <div className="flex min-h-full w-full items-center justify-center bg-zinc-300 px-4 py-12 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          {error && <p className="text-red-500">{error}</p>}
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          />
        </div>
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
        <Button className="w-full bg-slate-700" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </Button>
      </form>
    </div>
  )
}
export default RegisterView
