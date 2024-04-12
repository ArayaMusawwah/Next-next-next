import { useRouter } from "next/router"
import { useEffect } from "react"

const About = () => {
  const { push } = useRouter()
  useEffect(() => {
    push("/")
  }, [push])

  return <h1>About page</h1>
}
export default About
