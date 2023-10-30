import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout" 

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => setProducts(products))
  }, [])
  
  
  return (
    <Layout>
      <Card products={products}/>
    </Layout>
  )
}

export default Home
