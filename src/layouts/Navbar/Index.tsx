import Image from "next/image"
import Link from "next/link"
import style from "./Navbar.module.css"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const { data } = useSession()

  return (
    <nav className={`${style.navbar} w-full bg-gray-800 text-white`}>
      <div className="flex w-1/3 items-center space-x-4">
        {data?.user?.image && (
          <Image
            src={data.user.image}
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        )}
        <Link href="/" className={style.logo}>
          <h1>{data?.user?.name || "Wanderer"}</h1>
        </Link>
      </div>
      <ul className="flex items-center space-x-4">
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
            <Button onClick={() => signOut()} className="bg-red-500">
              Log out
            </Button>
          ) : (
            <Button onClick={() => signIn()}>Log in</Button>
          )}
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
