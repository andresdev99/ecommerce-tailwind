import { useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductPreview from "../../Components/ProductPreview"
import { useShopContext } from "../../Context"
import { useFetch } from "../../Hooks/useFetch"

const Home = () => {
  const { searchProduct, searchProductByName } = useShopContext();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>All Products</h2>
        </div>
        <input
          type="search"
          className="rounded-lg p-2 border border-black w-80 focus:outline-none"
          placeholder="Search product"
          onChange={(event) => searchProductByName(event.target.value)} />
        {searchProduct && searchProduct.length
          ? <Card products={searchProduct} />
          : <div className="mt-2">No products found</div>
        }
      </div>

    </Layout>
  )
}

export default Home
