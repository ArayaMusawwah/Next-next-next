import { ProductType } from "@/types/Product"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({
  products,
  isLoading
}: {
  products: ProductType[]
  isLoading: boolean
}) => {
  return (
    products &&
    products.map((product) => (
      <ul className="text-center text-white" key={product.id}>
        <Link href={`/products/${product.id}`}>
          <Image src={product.image} width={200} height={200} alt="image" />
        </Link>
        <li>{product.name}</li>
        <li>{product.price}</li>
      </ul>
    ))
  )
}
export default ProductCard
