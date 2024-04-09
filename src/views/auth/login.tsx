import { Form } from "@/components/ui/form"

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-300">
      <form className="space-y-6" onSubmit={() => console.log("submitted")}>
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
            autoComplete="email"
            className="focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
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
            autoComplete="current-password"
            className="focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="hover:bg-primary-dark focus:ring-primary-500 flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-6 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
        >
          Log in
        </button>
      </form>
    </div>
  )
}
export default LoginPage
