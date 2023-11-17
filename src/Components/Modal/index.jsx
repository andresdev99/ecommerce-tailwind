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
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-black text-xl mb-4">Are you sure you want to delete?</h2>
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
