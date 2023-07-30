import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({
  img,
  productName,
  category,
  price,
  status,
  description,
  keyFeatures,
  averageRating,
  _id,
}) => {
  return (
    <Link
      href={`/details/${_id}`}
      className="flex  items-center flex-col gap-2 custom-shadow p-5 pt-10 justify-between transition-all  rounded-md no-underline text-black"
    >
      <div className="w-[200px]">
        <img className="w-full" src={img} alt="product" />
      </div>
      <div className="flex justify-between w-full items-center mt-2">
        <div>
          <h2 className="mb-2 text-[18px] md:text-xl">{productName}</h2>
          <div className="flex gap-10 items-center mb-2 mt-4">
            <span className="font-bold text-xl  ">${price}</span>
            <span className="px-3 text-sm py-1 bg-slate-200 rounded-md shadow">
              {category}
            </span>
          </div>
          <ReactStars count={5} size={24} value={averageRating} edit={false} />
        </div>
        <div className="px-2 py-1 bg-yellow-100  whitespace-nowrap">
          {status}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
