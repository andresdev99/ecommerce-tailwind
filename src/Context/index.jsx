import { createContext, useContext, useState, useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";

const CART_PRODUCTS_KEY = "cartProducts";
const COUNTER_KEY = "counter";
const ORDERS = "orders";

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
    const { products } = useFetch('https://fakestoreapi.com/products');

    const [scrolled, setScrolled] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [showPreviewFirst, setShowPreviewFirst] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchProduct, setSearchProduct] = useState([])
    const [orders, setOrders] = useState(() => {
        const storedOrder = localStorage.getItem(ORDERS);
        return storedOrder ? JSON.parse(storedOrder) : [];
    });
    
    const searchProductByName = (productName) => {
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(productName.toLowerCase()))
        setSearchProduct(filteredProducts)
    }

    // Load cartProducts from localStorage or set it to an empty array if not present
    const [cartProducts, _setCartProducts] = useState(() => {
        const storedCartProducts = localStorage.getItem(CART_PRODUCTS_KEY);
        return storedCartProducts ? JSON.parse(storedCartProducts) : [];
    });

    // Load counter from localStorage or set it to 0 if not present
    const [counter, setCounter] = useState(() => {
        const storedCounter = localStorage.getItem(COUNTER_KEY);
        return storedCounter ? parseInt(storedCounter, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem(CART_PRODUCTS_KEY, JSON.stringify(cartProducts));
        localStorage.setItem(COUNTER_KEY, counter.toString());
    }, [cartProducts, counter]);

    useEffect(() => {
        localStorage.setItem(ORDERS, JSON.stringify(orders));
    }, [orders])
    
    useEffect(() => {
        setSearchProduct(products)
    }, [products])
    
    const updateCartProducts = (updatedCart) => {
        const productsCounter = updatedCart.reduce((total, cartProduct) => total + cartProduct.counter, 0);
        _setCartProducts(updatedCart);
        setCounter(productsCounter);
    };


    const setCartProducts = (product) => {
        if (Object.keys(product).length) {
            const updatedCartProducts = [...cartProducts];
            const existingProduct = updatedCartProducts.find((cartProduct) => cartProduct.id === product.id);

            if (existingProduct) {
                existingProduct.counter += 1;
            } else {
                updatedCartProducts.push({ ...product, counter: 1 });
            }

            updateCartProducts(updatedCartProducts);
        } else {
            updateCartProducts([]);
        }
    };

    const substractProduct = (productId) => {
        const updatedCartProducts = cartProducts.map((cartProduct) => {
            if (cartProduct.id === productId && cartProduct.counter > 1) {
                cartProduct.counter -= 1;
            }
            return cartProduct;
        });

        const productsCounter = updatedCartProducts.reduce((total, cartProduct) => total + cartProduct.counter, 0);

        _setCartProducts(updatedCartProducts);
        setCounter(productsCounter);
    };

    const removeProduct = (productId) => {
        const updatedCartProducts = cartProducts.filter((cartProduct) => cartProduct.id !== productId);
        const productsCounter = updatedCartProducts.reduce((total, cartProduct) => total + cartProduct.counter, 0);

        _setCartProducts(updatedCartProducts);
        setCounter(productsCounter);
    };


    return (
        <ShoppingContext.Provider
            value={{
                counter,
                scrolled,
                showPreview,
                productInfo,
                cartProducts,
                showCheckout,
                showPreviewFirst,
                isModalOpen,
                orders,
                products,
                searchProduct,
                setScrolled,
                setShowPreview,
                setProductInfo,
                setCartProducts,
                setShowCheckout,
                substractProduct,
                removeProduct,
                setShowPreviewFirst,
                setIsModalOpen,
                setOrders,
                setSearchProduct,
                searchProductByName
            }}
        >
            {children}
        </ShoppingContext.Provider>
    );
};

export const useShopContext = () => useContext(ShoppingContext);
