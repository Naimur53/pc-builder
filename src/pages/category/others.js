import ShowCategoryData from "@/components/Shared/ShowCategoryData/ShowCategoryData";
import React from "react";

const Others = ({ data }) => {
  return (
    <>
      <ShowCategoryData
        title={"All Others product are there"}
        data={data}
      ></ShowCategoryData>
    </>
  );
};

export default Others;
export async function getStaticProps() {
  // Fetch data from an API or database
  // In this example, we are using the sample data defined above
  const res = await fetch(
    "http://localhost:5000/api/v1/products?category=Others"
  );
  const data = await res.json();
  return {
    props: {
      data: data.data,
    },
  };
}
