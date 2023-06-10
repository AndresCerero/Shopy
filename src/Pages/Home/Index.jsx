//Take context
import { useContext, useEffect } from 'react'
import { ShoppingCartContext } from '../../Context/Index'

//Take Components
import Card from '../../Components/Card/Index'
import Layout from '../../Components/Layout/Index'
import ProductDetail from '../../Components/ProductDetail/Index'


//Params
import { useParams } from 'react-router-dom'


function Home() {

    //Destructuration of prosp context
    const { setSearchByTitle, setSearchByCategory, filteredItems } = useContext(ShoppingCartContext)

    //Pasando parametro a contex-
    const { category } = useParams()

    useEffect(() => {
        setSearchByCategory(category)
    }, [category, setSearchByCategory])


    //Render
    const renderView = () => {
        if (filteredItems?.length > 0) {
            return filteredItems.map((item) => (
                <Card key={item.id} data={item} />
            ))
        } else {
            return <p>No result Found</p>
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-x1'>Exclusive Products</h1>
            </div>
            <input
                type='text'
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-2 mb-6 focus:outline-none'
                onChange={(e) => setSearchByTitle(e.target.value)}
            />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    renderView()
                }
            </div>
            <ProductDetail />
        </Layout>
    )

}

export default Home
