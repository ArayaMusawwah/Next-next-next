import ProductPage from "@/components/products/ProductPage"
import { fetcher } from "@/lib/fetch"
import { Product } from "@/types/Product"
import { useRouter } from "next/router"
import { Suspense } from "react"
import useSWR from "swr"

const Product = ({ product }: { product: Product }) => {
  const { query } = useRouter()
  // ClientSide
  /* const { data, error, isLoading } = useSWR(
    `/api/products/${query.products}`,
    fetcher
  ) */

  return (
    <div className="grid place-items-center">
      <Suspense>
        {/* ClientSide */}
        {/* <ProductPage
          product={isLoading ? [] : data.data}
          isLoading={isLoading}
        /> */}

        {/* ServerSide */}
        <ProductPage product={product} />
      </Suspense>
    </div>
  )
}

export const getServerSideProps = async () => {
  const getData = await fetch("http://localhost:3000/api/products")
  const res = await getData.json()

  return {
    props: {
      product: res.data
    }
  }
}

export default Product
