import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/Index'

import { Link } from 'react-router-dom'

import Layout from '../../Components/Layout/Index'

import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {

    const { order } = useContext(ShoppingCartContext)

    return (

        <Layout>
            <div className='flex items-center justify-center rellative w-80 mb-4'>
                <h1 className='font-medium text-x1'>MyOrders</h1>
            </div>
            {
                order.map((order, index) => (
                    <Link key={index} to={`/myorder/${index}`}>
                        <OrdersCard 
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders