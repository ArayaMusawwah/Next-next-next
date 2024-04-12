import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { fetcher } from "@/lib/fetch"
import Spinner from "@/components/loaders/SquareLoader"

import { ProductType } from "@/types/Product"
import ProductCard from "@/components/products/ProductCard"
import CardLoader from "@/components/loaders/CardLoader"

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const { data, error, isLoading } = useSWR("/api/products", fetcher)

  useEffect(() => {
    isLoading ? setProducts([]) : setProducts(data?.data)
  }, [data, isLoading])

  /* useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.data)
      })
  }, []) */

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Ini nanti bakalan ada banyak products</h1>
      {isLoading ? (
        <CardLoader />
      ) : (
        <div className="grid grid-cols-2 gap-5">
          <ProductCard products={isLoading ? [] : products} />
        </div>
      )}
    </>
  )
}
export default Products
