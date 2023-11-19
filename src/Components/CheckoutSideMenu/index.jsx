import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from "../../utils"
import { useShopContext } from '../../Context'
import OrderCard from '../OrderCard'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {
    const {
        scrolled,
        cartProducts,
        counter,
        showPreviewFirst,
        setOrders,
        setCartProducts,
        setShowCheckout
    } = useShopContext()

    const asideStyles = `flex
    flex-col fixed right-0 border
    bg-white border-black rounded-lg w-[360px]
    ${scrolled ? ' top-0 h-[100vh] ' : 'top-[80px] h-[calc(100vh-80px)] '}
    ${showPreviewFirst ? ' z-20 ' : ' z-30 '}
    `
    const totalCost = totalPrice(cartProducts);

    const handleCheckout = () => {
        if (cartProducts.length) {
            const currentDate = new Date();

            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');

            const orderToAdd = {
                date: (`${year}-${month}-${day}`),
                products: cartProducts,
                totalProducts: cartProducts.length,
                totalItems: counter,
                totalPrice: totalCost
            }
            setOrders(prev => [...prev, orderToAdd]);
            setCartProducts({});
            setShowCheckout(false);
        }
    }
    return (
        <aside className={asideStyles}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => setShowCheckout(false)} />
            </div>
            <div className='flex-1 flex flex-col gap-3 px-6 overflow-hidden'>
                <div className='flex flex-col'>
                    <div className='text-lg font-bold'>
                        <span>
                            Total:&nbsp;
                        </span>
                        <span className='text-green-600'>
                            {totalCost}
                        </span>
                    </div>
                    <span className='w-full '>
                        <span className='text-gray-500'>(</span>
                        <span className='text-black font-bold'>{cartProducts.length}</span>
                        <span className='text-gray-500'>) </span>
                        <span className='text-gray-500'>Product(s)</span>
                        <span className='text-black font-bold'> - </span>
                        <span className='text-gray-500'>(</span>
                        <span className='text-black font-bold'>{counter}</span>
                        <span className='text-gray-500'>) </span>
                        <span className='text-gray-500'> Item(s)</span>
                    </span>
                </div>
                <div
                    className='flex flex-col mb-4 gap-2 overflow-y-auto'>
                    {
                        cartProducts.map(product => <OrderCard key={product.id} product={product} />)
                    }

                </div>

            </div>
            <Link to='/my-orders/last' className='mx-6 mb-4'>
                <button
                    className='w-full bg-black rounded-md text-white'
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </Link>

        </aside>
    )
}

export default CheckoutSideMenu
