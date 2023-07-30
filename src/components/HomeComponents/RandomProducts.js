import React from "react";
import ProductCard from "../Shared/ProductCard/ProductCard";

const RandomProducts = ({ data }) => {
  return (
    <div className="container">
      <h3 className="text-center my-10 text-4xl">Featured Products</h3>

      <div className="grid px-4 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((single) => (
          <ProductCard key={single._id} {...single}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;
