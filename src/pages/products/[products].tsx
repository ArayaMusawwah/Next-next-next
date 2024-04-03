import ProductPage from "@/components/products/ProductPage"
import { fetcher } from "@/lib/fetch"
import { useRouter } from "next/router"
import { Suspense } from "react"
import useSWR from "swr"

const Product = () => {
  const { query } = useRouter()
  const { data, error, isLoading } = useSWR(
    `/api/products/${query.products}`,
    fetcher
  )

  return (
    <div className="grid place-items-center">
      <Suspense>
        <ProductPage product={data?.data} isLoading={isLoading} />
      </Suspense>
    </div>
  )
}
export default Product
