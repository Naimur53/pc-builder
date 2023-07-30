import ProductCard from "@/components/Shared/ProductCard/ProductCard";
import { addProduct } from "@/redux/features/pcParts/pcParts";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
const SelectCategory = ({ category, data }) => {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const handleSelect = (info) => {
    dispatch(addProduct(info));
    navigate.push("/pcBuilder");
  };
  return (
    <div className="container">
      <h2 className="text-center my-6 text-4xl">Choose a {category}</h2>
      <div className=" grid gap-5">
        {data.map((single) => (
          <div
            key={single._id}
            className="flex md:flex-row flex-col custom-shadow py-4 rounded-xl px-3 items-center gap-5"
          >
            <div className="w-[200px] md:max-w-[100px]">
              <img className="w-full" src={single.img} alt="product" />
            </div>

            {/* <div className="w-full">
              <h2>{single.productName}</h2>
              <p>{single.price}</p>
            </div> */}
            <div className="w-full">
              <div>
                <h2 className="mb-2 mt-0 text-[18px] md:text-xl">
                  {single.productName}
                </h2>
                <div className="flex gap-10 items-center mb-2 mt-4">
                  <span className="font-bold text-xl  ">${single.price}</span>
                  <span className="px-3 text-sm py-1 bg-slate-200 rounded-md shadow">
                    {single.category}
                  </span>
                </div>
                <ReactStars
                  count={5}
                  size={24}
                  value={single.averageRating}
                  edit={false}
                />
              </div>
              <div className="px-2 py-1 inline-block bg-yellow-100  whitespace-nowrap">
                {single.status}
              </div>
            </div>
            <button
              className="px-5 whitespace-nowrap py-2 text-lg disabled:bg-gray-500 disabled:opacity-75 rounded text-white  bg-blue-500 border-0 cursor-pointer"
              disabled={single.status !== "In Stock"}
              onClick={() => handleSelect(single)}
            >
              Add to builder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;

export async function getServerSideProps({ params }) {
  const { category } = params;
  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/products?category=${category}`
    );
    if (!res.ok) {
      // Handle the case when the API returns an error
      return { notFound: true };
    }
    const data = await res.json();
    if (!data.data.length) {
      return { notFound: true };
    }
    return {
      props: {
        category,
        data: data.data,
      },
    };
  } catch (error) {
    // Handle any other error that might occur during data fetching
    return { notFound: true };
  }
}
