import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="container">
      <div className="grid px-2 grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <h2 className="text-5xl xl:text-7xl mb-0 xl:leading-[80px]">
            World best <br /> PC parts
          </h2>
          <p className="text-lg my-5 md:my-10 leading-[20px]   w-full md:w-2/3">
            Welcome to our PC Builder Website, where you have the power to
            create your perfect computing experience. Whether you&apos;re a
            hardcore gamer, a content creator, or a professional seeking
            top-notch performance.
          </p>
          <Link href={"pcBuilder"}>
            <button className="px-3 py-2 text-lg outline-none  border-none rounded  font-bold bg-blue-500 text-white ">
              Create Your PC Now
            </button>
          </Link>
        </div>
        <Image
          height={400}
          width={400}
          layout="responsive"
          className="w-full"
          src="https://i.ibb.co/pJzkQ9j/istockphoto-619052288-612x612-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeBanner;
