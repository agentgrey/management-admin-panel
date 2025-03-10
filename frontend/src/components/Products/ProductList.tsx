'use client'
// components/ProductList.tsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";


const ProductList: React.FC = () => {
  const [fetchedProduct, setFetchedProduct] = useState([]);
  const { authConfig } = useAuth();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_URL;
        const response = await axios.get(`${API_BASE_URL}/api/products`, authConfig);
        console.log('response: ', response);
        const passedProduct = response?.data;

        setFetchedProduct(passedProduct);

        setFetchedProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [authConfig]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {fetchedProduct.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;