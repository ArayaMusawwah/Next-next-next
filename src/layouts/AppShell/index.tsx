import React from "react"
import { useRouter } from "next/router"
import { poppins, roboto } from "@/fonts"
import dynamic from "next/dynamic"
const Navbar = dynamic(() => import("../Navbar/Index"), { ssr: false })

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const disableNavbar = ["/404"]
  const { pathname } = useRouter()
  return (
    <>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <main
        className={`main bg-slate-900 ${poppins.variable} ${roboto.variable} font-poppins`}
      >
        {children}
      </main>
    </>
  )
}
export default AppShell
