import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import Navbar from "../components/Shared/Navbar/Navbar";
import HomeBanner from "@/components/HomeComponents/HomeBanner";
import RandomProducts from "@/components/HomeComponents/RandomProducts";
import FeatureCategory from "@/components/HomeComponents/FeatureCategory";

export default function Home({ data }) {
  return (
    <main>
      <HomeBanner></HomeBanner>
      <RandomProducts data={data}></RandomProducts>
      <FeatureCategory></FeatureCategory>
    </main>
  );
}

// Home.getLayout = function (children) {
//   return (
//     <>
//       <Navbar></Navbar>
//       {children}
//     </>
//   );
// };

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://pc-builder-backend2-naimur53.vercel.app/api/v1/products/random`
    );
    if (!res.ok) {
      // Handle the case when the API returns an error
      return { notFound: true };
    }
    const data = await res.json();
    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    // Handle any other error that might occur during data fetching
    return { notFound: true };
  }
}
