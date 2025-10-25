import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ResultsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a product database with hardcoded products
    const mockDatabase = {
      "prod-123": {
        name: "Dove Shampoo",
        price: 199,
        description: "Gentle care for smooth hair",
        category: "Haircare",
      },
      "prod-456": {
        name: "Pantene Conditioner",
        price: 180,
        description: "Strengthens and nourishes hair",
        category: "Haircare",
      },
    };

    const fetchedProduct = mockDatabase[productId];

    setTimeout(() => {
      setProduct(fetchedProduct);
      setLoading(false);
    }, 500); // Simulate fetch delay
  }, [productId]);

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (!product) return <p className="text-center mt-8">Product not found.</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
    </div>
  );
}

export default ResultsPage;
