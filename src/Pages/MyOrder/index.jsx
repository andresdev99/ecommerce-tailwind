import React from 'react'
import Layout from '../../Components/Layout'
import { useShopContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


const MyOrder = () => {
  const { orders } = useShopContext();
  const currentOrderId = window.location.pathname.split('/')[2];
  const lastProducts = !isNaN(currentOrderId) ? orders[currentOrderId]: orders?.slice(-1)[0];

  return (
    <Layout>
      {
        Object.keys(lastProducts).length ?
          <div className='flex flex-col gap-2 px-6 w-4/5 '>
            <div className='flex justify-center items-center p-6 relative'>
              <Link to='/my-orders' className='absolute left-0'>
                <ChevronLeftIcon className='h-6 w-6' />
              </Link>
              <h2 className='font-medium text-xl'>My Order</h2>
            </div>
            <div className='flex flex-col'>
              <span className='w-full '>
                <span className='text-gray-500'>(</span>
                <span className='text-black font-bold'>
                  {lastProducts.products.length}
                </span>
                <span className='text-gray-500'>) </span>
                <span className='text-gray-500'>Product(s)</span>
                <span className='text-black font-bold'> - </span>
                <span className='text-gray-500'>(</span>
                <span className='text-black font-bold'>{lastProducts?.totalItems}</span>
                <span className='text-gray-500'>) </span>
                <span className='text-gray-500'> Item(s)</span>
              </span>
            </div>
            {
              lastProducts.products?.map(product => <OrderCard key={product.id} product={product} isCheckout={true} />)
            }
            <div className='font-bold'>
              <span>Total:&nbsp;</span>
              <span className='text-green-600'>{lastProducts.totalPrice}</span>
            </div>
          </div> :
          <span>NO ORDERS TO SHOW</span>

      }
    </Layout>
  )
}

export default MyOrder
