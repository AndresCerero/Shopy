import { XMarkIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Index";

import OrderCard from "../OrderCard";

import { totalPrice } from "../utils";

const CheckOutSideMenu = () => {

    const { toggleCheckOutSideMenuOpen, isCheckOutSideMenuOpen, cardProducts, setCardProducts, order, setOrder , setSearchByTitle } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cardProducts.filter(product => product.id != id)
        setCardProducts(filteredProducts)
    }

    const handleCheckOut = () => {
        const orderToAdd = {
            data: '01.02.23',
            products: cardProducts,
            totalProducts: cardProducts.length,
            totalPrice: totalPrice(cardProducts)
        }

        setOrder([...order, orderToAdd])
        setCardProducts([])
        setSearchByTitle(null)
    }

    return (
        <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed top-20 right-0 border border-black rounded-lg bg-white border-black rounded-lg w-[360px] h-[calc(100vh-14%)] overflow-y-scroll`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => toggleCheckOutSideMenuOpen()}
                    >
                    </ XMarkIcon>
                </div>
            </div>
            <div className="px-6 over-flow-y-scroll flex-1">
                {
                    cardProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imgUrl={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total</span>
                    <span className="Font-medium text-2x1">${totalPrice(cardProducts)}</span>
                </p>
                <Link to='/myorder/last'>
                    <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckOut()}>CheckOut</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckOutSideMenu