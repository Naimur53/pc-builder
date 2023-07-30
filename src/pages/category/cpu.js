import Navbar from "@/components/Shared/Navbar/Navbar";
import ShowCategoryData from "@/components/Shared/ShowCategoryData/ShowCategoryData";

const Cpu = ({ data }) => {
  return (
    <>
      <ShowCategoryData title={"All cpu"} data={data}></ShowCategoryData>
    </>
  );
};
export async function getStaticProps() {
  // Fetch data from an API or database
  // In this example, we are using the sample data defined above
  const res = await fetch("http://localhost:5000/api/v1/products?category=CPU");
  const data = await res.json();
  return {
    props: {
      data: data.data,
    },
  };
}

export default Cpu;
