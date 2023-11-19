import React from 'react'
import Layout from '../../Components/Layout'
import { useShopContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

const MyOrders = () => {
  const { orders, counter, setShowCheckout } = useShopContext();

  const lastProducts = orders?.slice(-1);
  console.log(lastProducts)
  return (
    <Layout>
      {
        lastProducts.length ?
          <div className='flex flex-col gap-2 px-6 w-4/5'>
            <div className='flex justify-between items-center p-6'>
              <h2 className='font-medium text-xl'>My Order</h2>
            </div>
            {
              lastProducts[0]?.products?.map(product => <OrderCard key={product.id} product={product} isCheckout={true} />)
            }
            <div className='font-bold'>
              <span>Total:&nbsp;</span>
              <span className='text-green-600'>{lastProducts[0].totalPrice}</span>
            </div>
          </div> :
          <span>NO ORDERS TO SHOW</span>

      }
    </Layout>
  )
}

export default MyOrders
