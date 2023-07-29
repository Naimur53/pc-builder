import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import Navbar from "../components/Shared/Navbar/Navbar";
import HomeBanner from "@/components/HomeComponents/HomeBanner";

export default function Home() {
  return (
    <main>
      <HomeBanner></HomeBanner>
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
