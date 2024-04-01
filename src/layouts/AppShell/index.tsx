import React from "react"
import Navbar from "../Navbar/Index"
import { useRouter } from "next/router"

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const disableNavbar = ["/404"]
  const { pathname } = useRouter()
  return (
    <>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <main className="main bg-slate-900">{children}</main>
    </>
  )
}
export default AppShell
