import { useState, useEffect } from "react";

const useFetch = (apiUrl) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data
    fetch(apiUrl)
      .then(response => response.json())
      .then(products => {
        setProducts(products);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Ensure loading is set to false even in case of an error
      });
  }, [apiUrl]);

  return { products, isLoading }; // Return products and loading state
};

export { useFetch };
