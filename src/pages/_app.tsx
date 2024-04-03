import "@/styles/globals.css"
import "react-loading-skeleton/dist/skeleton.css"
import type { AppProps } from "next/app"
import AppShell from "@/layouts/AppShell"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  )
}
