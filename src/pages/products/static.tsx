import ProductCard from "@/components/products/ProductCard"
import { ProductType } from "@/types/Product"

const Static = ({ products }: { products: ProductType[] }) => {
  return (
    <>
      <h1>Static Site Rendering</h1>
      <div className="grid grid-cols-2 gap-5">
        <ProductCard products={products} />
      </div>
    </>
  )
}
export default Static

export const getStaticProps = async () => {
  const getData = await fetch("http://localhost:3000/api/products")
  const res = await getData.json()
  return { props: { products: res.data } }
}
