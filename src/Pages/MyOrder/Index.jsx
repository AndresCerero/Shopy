import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import { Link, useParams } from 'react-router-dom'

import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/Index'

import Layout from '../../Components/Layout/Index'

import OrderCard from '../../Components/OrderCard'

function MyOrder() {

    const { order } = useContext(ShoppingCartContext)

    const { id } = useParams()

    return (

        <Layout>
            <div>
                <Link to='/myorders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
            </div>
            <h1>MyOrder</h1>
            <div className='flex flex-col w-80'>
                {id == undefined ?
                    (
                        order?.slice(-1)[0].products.map(product => (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imgUrl={product.images}
                                price={product.price}
                            />
                        ))
                    ) : (
                        order?.[id].products.map(product => (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imgUrl={product.images}
                                price={product.price}
                            />
                        ))
                    )
                }
            </div>
        </Layout>
    )
}

export default MyOrder