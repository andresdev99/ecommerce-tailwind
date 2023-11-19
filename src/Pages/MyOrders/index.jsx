import React from 'react'
import Layout from '../../Components/Layout'
import { useShopContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import { Link } from 'react-router-dom'

const MyOrders = () => {
  const { orders } = useShopContext();

  return (
    <Layout>
      {
        orders.length ?
          <div className='flex flex-col gap-2 px-6 items-center w-4/5'>
            <div className='flex justify-between items-center p-6'>
              <h2 className='font-medium text-xl'>My Orders</h2>
            </div>
            {
              orders?.map((order, idx) => (
                <Link to={`/my-orders/${idx}`} key={idx}>
                  <OrdersCard order={order} />
                </Link>
              ))
            }
          </div> :
          <span>NO ORDERS TO SHOW</span>

      }
    </Layout>
  )
}

export default MyOrders
