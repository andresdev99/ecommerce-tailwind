import React from 'react';
import { useShopContext } from '../../Context';

const Modal = () => {
    const {
        isModalOpen,
        setIsModalOpen,
        productInfo,
        removeProduct
    } = useShopContext();

    const removeItemFromCart = () => {
        removeProduct(productInfo.id)
        setIsModalOpen(false)
    }
    return (
        <>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-4/5 p-6 rounded-lg">
                        <div className='text-black'>
                            <span className="text-lg">
                                Are you sure you want to delete&nbsp; 
                                <span className="text-xl font-bold">
                                    {productInfo.title}&nbsp;
                                </span>
                                <span className="text-xl mb-4">
                                    from your shopping cart?
                                </span>
                            </span>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
                            >
                                No
                            </button>
                            <button
                                onClick={removeItemFromCart}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
