import { useShopContext } from "../Context"

/**
 * Function to sum the total cart products
 * @param {Array} cartProducts 
 * @returns 
 */
export const totalPrice = (cartProducts) => {
    let total = cartProducts.reduce((counter, productInfo) => (
        counter + (productInfo.price * productInfo.counter)
    ), 0);

    total = total ? total : 0;
    // Redondea el total a dos decimales y agrega el separador de miles
    const formattedTotal = total.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'USD' // Puedes cambiar la moneda según tu necesidad
    });
    
    return formattedTotal;
}

