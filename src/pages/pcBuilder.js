import SinglePcBuilderCategory from "@/components/PcBuilderComponents/SinglePcBuilderCategory";
import { Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const { category, isAllSelected } = useSelector((state) => state.pcParts);
  console.log(category);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container ">
      <h1 className="m-6 mt-20 text-center">Build your dream PC </h1>
      <div className="flex justify-end px-3">
        <button
          onClick={showModal}
          className="px-4 py-2 text-lg mb-4 disabled:hover:opacity-100 bg-blue-500 rounded-md border-none font-bold cursor-pointer disabled:bg-slate-500 text-white"
          disabled={!isAllSelected}
        >
          Complete
        </button>
      </div>
      <Modal
        title="Success"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3 className="text-center mb-1 text-xl text-green-500">
          Pc successfully build{" "}
        </h3>
        <h4 className="text-center mt-0 text-xl">Thank you!</h4>
      </Modal>
      <div className="grid grid-cols-1 gap-5 px-4">
        {category.map((single) => (
          <SinglePcBuilderCategory
            key={single.category}
            {...single}
          ></SinglePcBuilderCategory>
        ))}
      </div>
    </div>
  );
};

export default PcBuilder;
