import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
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
