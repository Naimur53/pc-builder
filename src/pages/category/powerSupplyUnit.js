import ShowCategoryData from "@/components/Shared/ShowCategoryData/ShowCategoryData";
import React from "react";

const PowerSupplyUnit = ({ data }) => {
  return (
    <>
      <ShowCategoryData
        title={"All Power supply unit  "}
        data={data}
      ></ShowCategoryData>
    </>
  );
};

export default PowerSupplyUnit;
export async function getStaticProps() {
  // Fetch data from an API or database
  // In this example, we are using the sample data defined above
  const res = await fetch(
    "https://pc-builder-backend2-naimur53.vercel.app/api/v1/products?category=Power Supply Unit"
  );
  const data = await res.json();
  return {
    props: {
      data: data.data,
    },
  };
}
