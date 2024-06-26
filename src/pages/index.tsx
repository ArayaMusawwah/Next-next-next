import Head from "next/head"
import IndexView from "@/views/IndexView"
export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Welcome Page</title>
      </Head>
      <IndexView />
    </>
  )
}
