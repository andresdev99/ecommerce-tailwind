import { createContext, useContext, useState } from "react";

const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    // State to check if the scrollbar was scrolled down
    const [scrolled, setScrolled] = useState(false);
    return (
        <ShoppingContext.Provider
            value={{
                count,
                scrolled,
                setCount,
                setScrolled
            }}
        >
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShopContext = () => useContext(ShoppingContext)