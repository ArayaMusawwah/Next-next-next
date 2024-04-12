import ProductCard from "@/components/products/ProductCard"
import { ProductType } from "@/types/Product"

const ServerSideProduct = ({ products }: { products: ProductType[] }) => {
  return (
    <>
      <h1>Server Side Product</h1>
      <div className="grid grid-cols-2 gap-5">
        <ProductCard products={products} />
      </div>
    </>
  )
}
export default ServerSideProduct

export const getServerSideProps = async () => {
  const getData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
  const res = await getData.json()

  return {
    props: {
      products: res.data
    }
  }
}
