import { Product } from "@/types/Product"
import Image from "next/image"

const ProductCard = ({ products }: { products: Product[] }) => {
  return (
    products &&
    products.map((product) => (
      <ul className="text-center text-white" key={product.id}>
        <Image src={product.image} width={200} height={200} alt="image" />
        <li>{product.name}</li>
        <li>{product.price}</li>
      </ul>
    ))
  )
}
export default ProductCard
