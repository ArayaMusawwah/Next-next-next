import Head from "next/head"
import Image from "next/image"

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Image
        src={"/not-found.svg"}
        width={0}
        height={0}
        alt="not found"
        className="w-1/2"
      />
    </>
  )
}
export default NotFound
