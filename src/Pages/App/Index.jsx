import './App.css'

import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/Index'

// pages 
import Home from '../Home/Index'
import MyAccount from '../MyAccount/Index'
import MyOrder from '../MyOrder/Index'
import MyOrders from '../MyOrders/Index'
import NotFound from '../NotFound/Index'
import Signin from '../Signin/Index'

// Components
import Navbar from '../../Components/Navbar/Index'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'


const AppRoutes = () => {

    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/:category', element: <Home /> },
        { path: '/myaccount', element: <MyAccount /> },
        { path: '/myorder', element: <MyOrder /> },
        { path: '/myorder/last', element: <MyOrder /> },
        { path: '/myorder/:id', element: <MyOrder /> },
        { path: '/myorders', element: <MyOrders /> },
        { path: '/signin', element: <Signin /> },
        { path: '/*', element: <NotFound /> },
    ])

    return routes

}

function App() {

    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
                <CheckOutSideMenu />
            </BrowserRouter>
        </ShoppingCartProvider>
    )

}

export default App
