import ProductCard from "@/components/products/ProductCard"
import { Product } from "@/types/Product"

const ServerSideProduct = ({ products }: { products: Product[] }) => {
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
  const getData = await fetch("http://localhost:3000/api/products")
  const res = await getData.json()

  return {
    props: {
      products: res.data
    }
  }
}
