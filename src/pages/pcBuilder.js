import SinglePcBuilderCategory from "@/components/PcBuilderComponents/SinglePcBuilderCategory";
import React from "react";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const { category, isAllSelected } = useSelector((state) => state.pcParts);
  console.log(category);
  return (
    <div className="container ">
      <div className="flex justify-end">
        <button
          className="px-3 py-2 bg-blue-500 rounded-md font-bold disabled:bg-slate-500"
          disabled={!isAllSelected}
        >
          Complete
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {category.map((single) => (
          <SinglePcBuilderCategory
            key={single.category}
            {...single}
          ></SinglePcBuilderCategory>
        ))}
      </div>
    </div>
  );
};

export default PcBuilder;
