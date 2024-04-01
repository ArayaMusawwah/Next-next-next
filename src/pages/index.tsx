import Head from "next/head"
import IndexView from "@/views/IndexView"
export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome Page</title>
      </Head>
      <IndexView />
    </>
  )
}
