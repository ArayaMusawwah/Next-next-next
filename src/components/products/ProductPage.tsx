import Image from "next/image"

const ProductPage = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <div className="px-4 py-2">
            <Image
              className="h-48 w-full object-cover"
              src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
              width={200}
              height={200}
              alt="Image of a product"
            />
          </div>
          <div className="px-4 py-2">
            <h1 className="text-lg font-medium leading-6 text-gray-900">
              High-Quality Paint Roller
            </h1>
            <p className="mt-2 text-sm text-gray-600">$599.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductPage
