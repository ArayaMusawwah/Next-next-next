import { useRouter } from "next/router"

const Slugs = () => {
  const { query } = useRouter()
  return (
    <h1>
      Slugs - {query.slugs?.[0]} - {query.slugs?.[2]}
    </h1>
  )
}
export default Slugs
