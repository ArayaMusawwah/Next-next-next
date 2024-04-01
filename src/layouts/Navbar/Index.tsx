import Image from "next/image"
import Link from "next/link"
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={`${style.navbar} bg-gray-800 text-white`}>
      <Link href="/" className={style.logo}>
        <h1>Araya Musawwah</h1>
      </Link>
      <ul>
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
      </ul>
    </nav>
  )
}
export default Navbar
