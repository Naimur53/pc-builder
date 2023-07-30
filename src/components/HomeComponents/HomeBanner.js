import React from "react";

const HomeBanner = () => {
  return (
    <div className="container">
      <div className="grid px-2 grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <h2 className="text-7xl mb-0">World best PC parts</h2>
          <p className="text-lg mt-5 leading-[20px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit non
            laboriosam alias omnis recusandae nam consequuntur, cumque unde
            error veritatis quas. At necessitatibus accusantium maxime aperiam
            reprehenderit repudiandae aliquam veniam.
          </p>
          <button className="px-3 py-2 outline-none border-green-300 border rounded border-solid font-bold bg-green-200 ">
            Create Your PC Now
          </button>
        </div>
        <img
          className="w-full"
          src="https://icon2.cleanpng.com/20180401/whq/kisspng-laptop-computer-mouse-gaming-computer-personal-com-pc-game-5ac182060a5064.1648230215226311740423.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeBanner;
