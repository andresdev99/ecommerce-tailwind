import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { useShopContext } from '../../Context'

const ProductPreview = () => {
    const { scrolled, setShowPreview, productInfo, showPreviewFirst } = useShopContext()
    const asideStyles = `flex overflow-y-auto
    z-30 flex-col fixed right-0 border 
    bg-white border-black rounded-lg w-[360px]
    ${scrolled ? ' top-0 h-[100vh] ' : ' top-[80px]  h-[calc(100vh-80px)] '}
    ${showPreviewFirst ? ' z-30 ' : ' z-20 '}
    `

    return (
        <aside className={asideStyles}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => setShowPreview(false)} />
            </div>
            <figure className='flex px-6 items-center justify-center'>
                <img
                    className='w-40 h-40 rounded object-contain'
                    src={productInfo.image}
                    alt={productInfo.category}
                />
            </figure>
            <p className='flex flex-col p-6 gap-3'>
                <span className='font-medium text-2xl'>{productInfo.title}</span>
                <span className='font-medium text-md'>${productInfo.price.toLocaleString('en-US')}</span>
                <span className='font-light text-sm'>{productInfo.description}</span>
            </p>
        </aside>
    )
}

export default ProductPreview
