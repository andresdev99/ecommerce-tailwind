import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'
import { ShoppingProvider } from '../../Context'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-order',
      element: <MyOrder />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/*',
      element: <NotFound />
    }

  ])
  return routes
}

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingProvider>

  )
}

export default App
