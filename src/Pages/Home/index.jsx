import { useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout" 
import ProductPreview from "../../Components/ProductPreview"
import { useShopContext } from "../../Context"
import { useFetch } from "../../Hooks/useFetch"

const Home = () => {
  const { showPreview, setScrolled } = useShopContext()
  const products = useFetch('https://fakestoreapi.com/products');

  return (
    <Layout>
      <Card products={products} />
    </Layout>
  )
}

export default Home
