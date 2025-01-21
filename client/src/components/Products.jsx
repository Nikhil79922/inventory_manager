/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Typewriter from "react-typewriter-effect";

const Products = () => {
  const [collection, setCollection] = useState([]);
  const [filter, setFilter] = useState("Trending");

  // Fetch products based on category
  const fetchProducts = async (category) => {
    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        setCollection(data);
      } else {
        console.error("Unexpected data format:", data);
        setCollection([]); // Reset products in case of invalid data
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setCollection([]); // Clear products on error
    }
  };

  // Handle dropdown change
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    fetchProducts(selectedFilter); // Fetch products for the selected filter
  };

  // Fetch initial products on component mount
  useEffect(() => {
    fetchProducts(filter);
  }, []);

  const categoryOptions = [
    "Trending",
    "Keyboard",
    "Mouse",
    "Motherboard",
    "Robots",
    "Headphones",
    "Speakers",
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 mb-8 rounded-lg shadow-lg flex flex-col lg:flex-row lg:justify-between items-center">
        <h2 className="text-4xl font-bold mb-4 lg:mb-0">
          <Typewriter
            textStyle={{ fontFamily: "Arial, sans-serif", fontSize: "3rem", fontWeight: "bold" }}
            startDelay={500}
            cursorColor="#ffcb05"
            multiText={[
              "Top Picks in Tech Innovation",
              "Cutting-Edge Tech Solutions",
              "Latest in Advanced Technology",
              "Premium Technical Products",
              "Exclusive High-Tech Collection",
              "Trending Technical Devices",
              "Innovative Products for Tech Enthusiasts",
              "State-of-the-Art Technology Showcase",
              "Tech Must-Haves of the Year",
              "Top-Rated Technology Essentials",
            ]}
            multiTextDelay={2000}
            typeSpeed={80}
            deleteSpeed={50}
            loop={true}
          />
        </h2>

        {/* Dropdown for Categories */}
        <div className="relative inline-block">
          <label htmlFor="category-filter" className="sr-only">
            Select Category
          </label>
          <select
            id="category-filter"
            value={filter}
            onChange={handleFilterChange}
            className="bg-gray-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Glowing Dot */}
          <div
            className="absolute top-2 right-2 w-2 h-2 bg-teal-400 rounded-full animate-pulse"
            style={{
              boxShadow: "0 0 4px 2px rgba(64, 224, 208, 0.6)",
            }}
          ></div>
        </div>
      </header>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {collection.length > 0 ? (
          collection.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 hover:bg-gray-700 text-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md border border-gray-700 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg font-bold mb-2 text-teal-400">{product.price}</p>
                <p className="text-sm text-gray-400">{product.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">No products available for this category.</p>
        )}
      </section>
    </div>
  );
};

export default Products;
