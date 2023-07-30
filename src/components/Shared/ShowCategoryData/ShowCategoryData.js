import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ShowCategoryData = ({ data, title }) => {
  return (
    <div className="">
      <div className="container pt-5">
        <h1 className="font-bold text-center text-3xl mt-0">{title}</h1>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {data?.map((single) => (
            <ProductCard key={single._id} {...single}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCategoryData;
