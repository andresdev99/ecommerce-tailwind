import { createContext, useContext, useState } from "react";

const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return (
        <ShoppingContext.Provider
            value={{
                count,
                setCount
            }}
        >
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShopContext = () => useContext(ShoppingContext)