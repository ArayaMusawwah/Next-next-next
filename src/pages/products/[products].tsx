import { fetcher } from "@/lib/fetch"
import { useRouter } from "next/router"
import useSWR from "swr"

const Product = () => {
  const { query } = useRouter()

  const { data, error, isLoading } = useSWR(
    `/api/products/${query.products}`,
    fetcher
  )

  return (
    <div>
      <h1>Product {query.products}</h1>
      <p className="text-red-500">{data?.data.name}</p>
    </div>
  )
}
export default Product
