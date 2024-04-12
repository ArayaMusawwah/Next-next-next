import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import { roboto } from "@/fonts"

const Navbar = () => {
  const { data } = useSession()

  return (
    <nav
      className={`${roboto.variable} font-roboto w-full bg-gray-800 text-white`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          {data?.user?.image && (
            <Image
              src={data.user.image}
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          )}
          <Link href="/">
            <h1 className="text-xl font-semibold">
              {data?.user?.name || "Wanderer"}
            </h1>
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            {data ? (
              <Button
                onClick={() => signOut()}
                className="rounded-md bg-red-500 px-4 py-2"
              >
                Log out
              </Button>
            ) : (
              <Button
                onClick={() => signIn()}
                className="rounded-md border-2 border-white px-4 py-2"
              >
                Log in
              </Button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
