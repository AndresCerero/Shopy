import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"

import { NavLink } from "react-router-dom";

const Navbar = () => {

    const { cardProducts } = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopy
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/'
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/clothes'
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/electronics'
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/furniture'
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/toy'
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/other'
                    >
                        Other
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    cerero@gmail.com
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/myorders'
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/myaccount'
                    >
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/signin'
                    >
                        Sing In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-blank'></ShoppingBagIcon>
                    <div>{cardProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar