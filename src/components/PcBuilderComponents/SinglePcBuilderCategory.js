import React from "react";

const SinglePcBuilderCategory = ({ img, category, selectedProduct }) => {
  return (
    <div className="flex gap-4 border border-solid border-red-100 py-2 px-2  rounded">
      <div className="max-w-[100px]">
        <img className="w-full" src={img} alt="category" />
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex  items-center gap-3 w-full">
            <h2>{category}</h2>
            <span>Required</span>
          </div>
          dfdfd dfa
          <dfn>d</dfn>
        </div>

        <div>
          <button>Choose Product</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePcBuilderCategory;
