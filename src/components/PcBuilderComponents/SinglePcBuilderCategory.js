import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";
const SinglePcBuilderCategory = ({ img, category, selectedProduct }) => {
  return (
    <div className="flex items-center md:flex-row flex-col gap-4 custom-shadow py-2 px-2  rounded">
      <div className="max-w-[100px]">
        <img className="w-full" src={img} alt="category" />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <div>
          <div className="flex justify-center md:justify-start items-center gap-3 w-full">
            <h2>{category}</h2>
            <span className="bg-gray-200 px-3 rounded-md py-1">Required</span>
          </div>
          {selectedProduct._id ? (
            <div className="flex gap-2 mg:gap-5">
              <div className="max-w-[100px]">
                <img className="w-full" src={selectedProduct.img} alt="" />
              </div>
              <div>
                <h3 className="mb-0 mt-0">{selectedProduct.productName}</h3>
                <ReactStars
                  count={5}
                  size={24}
                  value={selectedProduct.averageRating}
                  edit={false}
                />
                <p className="font-bold text-lg mt-2">
                  ${selectedProduct.price}
                </p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="py-4 md:py-0">
          <Link
            href={`/select/${category}`}
            className=" text-gray-100 no-underline px-4 py-3 rounded-md bg-blue-500 "
          >
            {selectedProduct._id ? "Change Product" : "Choose Product"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePcBuilderCategory;
