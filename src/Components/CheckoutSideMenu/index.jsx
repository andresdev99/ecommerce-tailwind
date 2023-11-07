import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { useShopContext } from '../../Context'

const CheckoutSideMenu = () => {
    const { scrolled, setShowCheckout, productInfo } = useShopContext()
    const asideStyles = `flex 
    z-30 flex-col fixed right-0 border 
    bg-white border-black rounded-lg w-[360px]
    ${scrolled ? ' top-0 h-[100vh] ' : 'top-[80px] h-[calc(100vh-80px)] '}`

    return (
        <aside className={asideStyles}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => setShowCheckout(false)} />
            </div>
        </aside>
    )
}

export default CheckoutSideMenu
