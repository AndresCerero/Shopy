import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"


const Card = (data) => {

    const { count, setCount, toggleProductDetail, setProductToShow, cardProducts, setCardProducts, toggleOpen } = useContext(ShoppingCartContext)

    const showProduct = (Product) => {
        toggleProductDetail()
        setProductToShow(Product)
    }

    const addProductsToCart = (Product) => {
        // setCount(count + 1)
        setCardProducts([...cardProducts, Product])
        toggleOpen()
    }

    const renderIcon = (id) => {

        const isInCart = cardProducts.filter(Product => Product.id === id).length > 0

        if (isInCart) {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1' >
                    <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
                </div>
            )
        }
        else {
            return (
                <div
                    className='absolute top-0  right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={() => addProductsToCart(data.data)}
                >
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            )
        }


    }

    return (
        <div className={" bg-white cursor-pointer w-56 h-60 rounded-lg"}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"> {data.data.category.name} </span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title}
                    onClick={() => showProduct(data.data)}
                />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card