import React from 'react'
import { useShopContext } from '../../Context'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/solid'

const ProductCounter = ({ product }) => {
    const {
        setCartProducts,
        substractProduct,
        setIsModalOpen,
        setProductInfo
    } = useShopContext()

    const openModal = () => {
        setIsModalOpen(true);
        setProductInfo(product);
    }
    return (
        <div
            className='flex gap-1 text-white mr-4 items-center justify-center w-16 h-5'>
            {
                product.counter > 1
                    ? <span
                        className='flex items-center justify-center h-full cursor-pointer bg-black w-full rounded-l-lg'
                        onClick={() => substractProduct(product.id)}
                    >
                        -
                    </span>
                    :
                    <TrashIcon
                        className='h-full w-full hover:text-red-400 bg-black rounded-l-md text-white cursor-pointer '
                        onClick={openModal} />
            }


            <span
                className='flex text-sm justify-center items-center w-4/12 h-full text-black font-semibold'>{product.counter}</span>

            <span
                className='flex h-full items-center justify-center cursor-pointer bg-black w-full rounded-r-lg '
                onClick={() => { setCartProducts(product) }}
            >
                +
            </span>
        </div>
    )
}

export default ProductCounter
