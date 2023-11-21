import React, { useEffect, useRef } from "react";
import Card from "../../Components/Card"; // Importing the Card component
import Layout from "../../Components/Layout"; // Importing the Layout component
import { useShopContext } from "../../Context"; // Importing the shop context

const Home = () => {
  const {
    searchProduct, // Array of products resulting from a search
    searchProductByName, // Function to search products by name
    categories, // Array of available categories
    products, // Array of all available products
    searchProductByCategory, // Function to search products by category
    isLoading // Loading state
  } = useShopContext(); // Accessing shop context

  const searchInputRef = useRef(null); // Creating a reference for the search input
  const category = window.location.pathname.split('/').splice(-1)[0]; // Extracting category from URL path

  const isCategory = (cat) => categories.some(c => c === cat); // Function to check if the category exists
  const inputValue = searchInputRef?.current?.value; // Getting the value of the search input, handling potential nulls

  useEffect(() => {
    const categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1); // Capitalizing the category name

    if (!inputValue) { // Checking if the search input is empty
      if (isCategory(category)) { // Checking if the category exists
        const filteredProducts = products.filter(product => (
          (product.category.charAt(0).toUpperCase() + product.category.slice(1)).includes(categoryCapitalized)
        )); // Filtering products by category

        if (JSON.stringify(filteredProducts) !== JSON.stringify(searchProduct)) {
          searchProductByCategory(categoryCapitalized); // Updating the products based on the category
        }
      } else {
        searchProductByCategory('All'); // If no category is found, show all products
      }
    }
  }, [searchProduct, products, category, searchProductByCategory, isCategory]);

  const handleSearchInputChange = (event) => {
    searchProductByName(event.target.value); // Handling search input changes
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>All Products</h2> {/* Heading */}
        </div>
        <input
          type="search"
          ref={searchInputRef}
          className="rounded-lg p-2 border border-black w-80 focus:outline-none"
          placeholder="Search product"
          onChange={handleSearchInputChange} // Handling input changes for product search
        />
        {isLoading // Displaying loading message if products are still loading
          ? <div className="mt-2">Loading...</div>
          : <Card products={searchProduct} /> // Displaying products using the Card component
        }
        {
          !isLoading && inputValue !== '' && searchProduct.length === 0 && // Displaying message if no products found after search
          <div className="mt-2">No products found</div>
        }
      </div>
    </Layout>
  );
};

export default Home;
