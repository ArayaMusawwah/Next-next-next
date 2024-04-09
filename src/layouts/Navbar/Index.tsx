import Image from "next/image"
import Link from "next/link"
import style from "./Navbar.module.css"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const { data } = useSession()

  return (
    <nav className={`${style.navbar} bg-gray-800 text-white`}>
      <Link href="/" className={style.logo}>
        <h1>Araya Musawwah</h1>
      </Link>
      <ul className="*:flex *:items-center">
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
          <Link href="/projects">Projects</Link>
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
