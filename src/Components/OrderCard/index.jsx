import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useShopContext } from '../../Context'
import ProductCounter from '../ProductCounter';
import { Tooltip } from "@material-tailwind/react";

const OrderCard = ({ product }) => {
    const { removeProduct } = useShopContext();
    return (
        <div className='flex justify-between items-center'>
            <ProductCounter product={product} />
            <div className='flex items-center h-20 w-32 gap-2'>
                <figure className='w-24 h-24'>
                    <img
                        className='w-full h-full rounded-lg object-cover'
                        src={product.thumbnail}
                        alt={product.title} />
                </figure>
                <Tooltip className='z-30 p-1' content={product.title}>
                    <p className='text-sm font-light line-clamp-2'>{product.title}</p>
                </Tooltip>
            </div>
            <div className='flex items-center gap-2 w-20'>
                <p className='text-lg font-medium w-16'>{product.price.toLocaleString('en-US')}</p>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => removeProduct(product.id)} />
            </div>
        </div>
    )
}

export default OrderCard
