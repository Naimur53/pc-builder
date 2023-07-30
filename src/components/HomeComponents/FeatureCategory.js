import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const FeatureCategory = () => {
  const { category } = useSelector((state) => state.pcParts);
  const navigate = useRouter();
  const handleNavigate = (categoryName) => {
    if (categoryName.split(" ").length > 1) {
      const names = categoryName.split(" ");
      names[0] = names[0].toLowerCase();
      const url = names.join("");
      navigate.push(`/category/${url}`);
      return;
    }
    navigate.push(`/category/${categoryName.toLowerCase()}`);
    return;
  };
  return (
    <div className="container">
      <h2 className="my-10 text-4xl text-center">Feature Category </h2>
      <div className=" grid px-3 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {category.map((single) => (
          <div
            onClick={() => handleNavigate(single.category)}
            key={single.category}
            className="p-5 flex justify-center flex-col items-center rounded-bull custom-shadow rounded-lg cursor-pointer"
          >
            <img src={single.img} className="w-1/2" alt="" />
            <h2>{single.category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategory;
