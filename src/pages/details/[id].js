import React from "react";
import ReactStars from "react-rating-stars-component";
const ProductDetails = ({
  data: {
    img,
    productName,
    category,
    price,
    status,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    _id,
  },
}) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="max-w-[500px]">
          <img className="w-full" src={img} alt="product" />
        </div>
        <div className="w-full mt-10">
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-2 md:items-center  mt-6">
            <h2 className="mb-0 mt-0">{productName}</h2>
            <span className="px-3 whitespace-nowrap text-sm font-bold py-1 bg-slate-200 rounded-md shadow">
              {category}
            </span>
          </div>
          <p>{description}</p>
          <div className="flex items-center gap-5">
            <span className="font-bold text-xl">${price}</span>
            <span className="px-2 py-1 bg-yellow-200 rounded mb-1 inline-block">
              {status}
            </span>
          </div>
          <div className=" ">
            <h4>
              Average Rating:{" "}
              <span className="text-red-400">{averageRating}</span>
            </h4>

            <h4>
              Individual Rating:{" "}
              <span className="text-blue-400">{individualRating}</span>
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <p className="whitespace-nowrap font-bold m-0">Key Feature:</p>
            <div className="flex gap-3 flex-wrap">
              {keyFeatures.split(",").map((single) => (
                <div
                  key={single}
                  className="px-3 py-1 rounded-full border-gray-300 border border-solid"
                >
                  {single}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export async function getStaticProps({ params }) {
  const { id } = params;
  try {
    const res = await fetch(`http://localhost:5000/api/v1/products/${id}`);
    if (!res.ok) {
      // Handle the case when the API returns an error
      return { notFound: true };
    }
    const data = await res.json();
    return {
      props: {
        id,
        data: data.data,
      },
    };
  } catch (error) {
    // Handle any other error that might occur during data fetching
    return { notFound: true };
  }
}
export async function getStaticPaths() {
  // Fetch the list of dynamic IDs from an API or database
  // For this example, I'm using hardcoded IDs
  const res = await fetch("http://localhost:5000/api/v1/products?limit=0");
  const all = await res.json();

  const ids = all.data.map((single) => single._id); // Replace this with the actual list of IDs
  console.log(ids);
  // Generate static paths for each ID
  const paths = ids.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}
