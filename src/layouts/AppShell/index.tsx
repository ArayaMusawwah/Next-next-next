import React from "react"
import Navbar from "../Navbar/Index"

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
    </>
  )
}
export default AppShell
