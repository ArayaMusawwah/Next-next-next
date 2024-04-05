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

        {/* ServerSide && Static */}
        <ProductPage product={product} />
      </Suspense>
    </div>
  )
}

// ServerSide
/* export const getServerSideProps = async ({
  params
}: {
  params: { products: string }
}) => {
  const getData = await fetch(
    `http://localhost:3000/api/products/${params.products}`
  )
  const res = await getData.json()

  return {
    props: {
      product: res.data
    }
  }
} */

//Static
export const getStaticPaths = async (): Promise<any> => {
  const getData = await fetch("http://localhost:3000/api/products")
  const res = await getData.json()

  const paths = res.data.map((product: Product) => ({
    params: { products: product.id }
  }))

  return { paths, fallback: false }
}
export const getStaticProps = async ({
  params
}: {
  params: { products: string }
}) => {
  const getData = await fetch(
    `http://localhost:3000/api/products/${params.products}`
  )
  const res = await getData.json()

  return {
    props: {
      product: res.data
    }
  }
}

export default Product
