import Card from "../../Components/Card"
import Layout from "../../Components/Layout" 
import { useFetch } from "../../Hooks/useFetch"

const Home = () => {
  const products = useFetch('https://fakestoreapi.com/products');
  
  return (
    <Layout>
      <Card products={products}/>
    </Layout>
  )
}

export default Home
