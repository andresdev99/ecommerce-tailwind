import React from 'react'
import { CalendarDaysIcon, ShoppingCartIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ order }) => {
    return (
        <div
            className='flex relative py-4 w-80 border border-black justify-between items-center pr-16 px-6 rounded-md bg-gray-200'>
            <div>
                <span className='flex gap-2 font-light'>
                    <CalendarDaysIcon className='h-5 w-6' />
                    {order.date}
                </span>
                <span className='flex gap-2 font-light'>
                    <ShoppingCartIcon className='h-6 w-6' />
                    {order.totalProducts} Products
                </span>
            </div>

            <span className='font-bold text-lg w-20'>{order.totalPrice}</span>
            <ChevronRightIcon className='h-6 w-6 absolute right-0 mr-3' />
        </div>
    )
}

export default OrdersCard
