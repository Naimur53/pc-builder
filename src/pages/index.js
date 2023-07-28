import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import Navbar from "../components/Shared/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Button className="text-red-300 bg-black hover:bg-red-900" type="primary">
        Button
      </Button>
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
