import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'
import { useShopContext } from '../../Context'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import Modal from '../../Components/Modal'
import { useEffect } from 'react'
import ProductPreview from '../../Components/ProductPreview'


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
      path: '/my-orders/last',
      element: <MyOrder />
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />
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
  const { showCheckout, showPreview, setScrolled } = useShopContext()
  
  useEffect(() => {
    // Función para manejar el desplazamiento
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Agregar un evento de desplazamiento al cargar el componente
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento de desplazamiento al descargar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      {showCheckout && <CheckoutSideMenu />}
      {showPreview && <ProductPreview />}
      <Modal />
    </BrowserRouter>
  )
}

export default App
