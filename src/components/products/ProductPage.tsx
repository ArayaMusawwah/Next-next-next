import Image from "next/image"
import { Product } from "@/types/Product"
import CardLoader from "@/components/loaders/CardLoader"

const ProductPage = ({
  product,
  isLoading
}: {
  product: any
  isLoading: boolean
}) => {
  return (
    <>
      {isLoading ? (
        <CardLoader />
      ) : (
        <div className="container mx-auto mt-8 px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
              <div className="px-4 py-2">
                <Image
                  className="h-48 w-full object-cover"
                  src={product?.image}
                  width={200}
                  height={200}
                  alt={`${product?.name}'s image`}
                />
              </div>
              <div className="px-4 py-2">
                <h1 className="text-lg font-medium leading-6 text-gray-900">
                  {product?.name}
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  {Number(product?.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR"
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default ProductPage
