import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pc Builder</title>
        <meta
          name="description"
          content="Welcome to our PC Builder Website, where you have the power to create your perfect computing experience. Whether you're a hardcore gamer, a content creator, or a professional seeking top-notch performance, we've got you covered. With a wide selection of high-quality PC components, from cutting-edge CPUs and powerful GPUs to lightning-fast storage devices and sleek monitors, you can customize your dream PC with ease."
        />
      </Head>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
