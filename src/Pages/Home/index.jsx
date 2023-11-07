import { useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout" 
import ProductPreview from "../../Components/ProductPreview"
import { useShopContext } from "../../Context"
import { useFetch } from "../../Hooks/useFetch"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"

const Home = () => {
  const { showPreview, setScrolled } = useShopContext()
  const products = useFetch('https://fakestoreapi.com/products');

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

  console.log('DETAILS:', showPreview)
  return (
    <Layout>
      <Card products={products}/>
      {showPreview && <ProductPreview />}
    </Layout>
  )
}

export default Home
