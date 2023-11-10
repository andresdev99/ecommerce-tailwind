import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { useShopContext } from '../../Context'
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
    const { scrolled, setShowCheckout, cartProducts, counter } = useShopContext()
    const asideStyles = `flex overflow-y-auto
    z-30 flex-col fixed right-0 border 
    bg-white border-black rounded-lg w-[360px]
    ${scrolled ? ' top-0 h-[100vh] ' : 'top-[80px] h-[calc(100vh-80px)] '}
    `

    return (
        <aside className={asideStyles}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => setShowCheckout(false)} />
            </div>
            <div className='flex flex-col gap-3 px-6'>
                <span className='w-full text-right '>
                    <span className='text-gray-500'>(</span>
                    <span className='text-black font-bold'>{cartProducts.length}</span>
                    <span className='text-gray-500'>) </span>
                    <span className='text-gray-500'>Products</span>
                    <span className='text-black font-bold'> - </span>
                    <span className='text-gray-500'>(</span>
                    <span className='text-black font-bold'>{counter}</span>
                    <span className='text-gray-500'>) </span>
                    <span className='text-gray-500'> Items</span>
                </span>
                {
                    cartProducts.map(product => <OrderCard key={product.id} product={product} />)
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu
