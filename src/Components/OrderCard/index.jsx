import React from 'react'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useShopContext } from '../../Context'
import ProductCounter from '../ProductCounter';
import { Tooltip } from "@material-tailwind/react";

const OrderCard = ({ product }) => {
    const {
        setProductInfo,
        setShowPreview,
        setShowPreviewFirst,
        setIsModalOpen
    } = useShopContext();

    const openProductDetail = (product) => {
        setProductInfo(product);
        setShowPreview(true);
        setShowPreviewFirst(true);
    }

    const openModal = () => {
        setIsModalOpen(true);
        setProductInfo(product);
    }
    return (
        <div className='flex bg-gray-200 rounded-md gap-3 h-14 justify-center items-center'>
            <div className='w-1/5'>
                <ProductCounter product={product} />
            </div>
            <div
                className='flex items-center justify-center w-3/5 gap-1 cursor-pointer'
                onClick={() => openProductDetail(product)}
            >
                <figure className='w-2/5 h-10'>
                    <img
                        className='w-full h-full rounded-lg object-contain'
                        src={product.image}
                        alt={product.title} />
                </figure>
                <Tooltip className='z-30 p-1' content={product.title}>
                    <p className='text-xs w-3/5 font-light line-clamp-2'>{product.title}</p>
                </Tooltip>
            </div>
            <div className='flex items-center h-full w-2/5'>
                <p className='text-lg text-center font-medium w-4/5'>${product.price.toLocaleString('en-US')}</p>
                <TrashIcon
                    className='h-full w-1/5 hover:bg-red-300 rounded-r-md text-red-500 cursor-pointer '
                    onClick={openModal} />
            </div>
        </div>
    )
}

export default OrderCard
