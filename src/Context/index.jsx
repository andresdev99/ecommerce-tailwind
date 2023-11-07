import { createContext, useContext, useState } from "react";

const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    // Products Counter
    const [count, setCount] = useState(0)
    // State to check if the scrollbar was scrolled down
    const [scrolled, setScrolled] = useState(false);
    // State to let system know if we need to show details of any product
    const [showPreview, setShowPreview] = useState(false)
    // Checkout side menu
    const [showCheckout, setShowCheckout] = useState(false)
    // Product info
    const [productInfo, setProductInfo] = useState({})
    // Products Cart
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingContext.Provider
            value={{
                count,
                scrolled,
                showPreview,
                productInfo,
                cartProducts,
                showCheckout,
                setCount,
                setScrolled,
                setShowPreview,
                setProductInfo,
                setCartProducts,
                setShowCheckout
            }}
        >
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShopContext = () => useContext(ShoppingContext)