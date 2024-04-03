import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { fetcher } from "@/lib/fetch"
import Spinner from "@/components/loaders/SquareLoader"

import { Product } from "@/types/Product"
import ProductCard from "@/components/products/ProductCard"

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
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
      {isLoading && <Spinner />}
      <div className="grid grid-cols-2 gap-5">
        <ProductCard products={products} />
      </div>
    </>
  )
}
export default Products
