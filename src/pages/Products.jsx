import React, { useState } from "react";

function Products() {
  const [preferences, setPreferences] = useState("");
  const [recommendedProduct, setRecommendedProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // AI Recommendation Logic (simplified for now)
    if (preferences === "brandA") {
      setRecommendedProduct("Brand A's Amazing Jeans");
    } else {
      setRecommendedProduct("Brand B's Cool Jeans");
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <label>
          What brand do you prefer?
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            className="border p-2"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Get Recommendation
        </button>
      </form>

      {recommendedProduct && (
        <div className="mt-4">
          <h2>Recommended Product: {recommendedProduct}</h2>
        </div>
      )}
    </div>
  );
}

export default Products;
