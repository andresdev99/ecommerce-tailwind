import { useState, useEffect } from "react"

export const useFetch = apiUrl => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(products => setProducts(products))
      }, [apiUrl])

    return products
}

