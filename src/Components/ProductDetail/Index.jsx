import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"

import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {

    const { toggleProductDetail, isProductDetailOpen, productToShow } = useContext(ShoppingCartContext)

    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white border-black rounded-lg w-[360px] h-[calc(100vh-14%)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detalle</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => toggleProductDetail()}
                    >
                    </ XMarkIcon>
                </div>
            </div>
            <figure className="px-6">
                <img
                    className="w-full h-full rounded-lg"
                    src={productToShow.images ? productToShow.images[0] : ''}
                    alt={productToShow.title}
                />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2x1 mb-2">
                    ${productToShow.price}
                </span>
                <span className="font-medium text-md">
                    {productToShow.title}
                </span>
                <span className="font-light text-sm">
                    {productToShow.description}
                </span>
            </p>
        </aside>
    )
}

export default ProductDetail