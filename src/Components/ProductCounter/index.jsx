import React from 'react'
import { useShopContext } from '../../Context'

const ProductCounter = ({ product }) => {
    const { setCartProducts, substractProduct } = useShopContext()
    return (
        <div
            className='flex gap-1 text-white mr-4 items-center justify-center w-20'>
            <span
                className='flex justify-center cursor-pointer bg-black w-full rounded-l-lg'
                onClick={() => { setCartProducts(product) }}
            >
                +
            </span>
            <span className='flex justify-center text-black font-semibold'>{product.counter}</span>
            <span
                className='flex justify-center cursor-pointer bg-black w-full rounded-r-lg'
                onClick={() => substractProduct(product.id)}
            >
                -
            </span>
        </div>
    )
}

export default ProductCounter
