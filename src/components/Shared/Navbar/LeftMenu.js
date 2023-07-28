import React from "react";
import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const LeftMenu = () => {
  const ProductCategory = [
    {
      title: "CPU",
      link: "/category/cpu",
    },
    {
      title: "Motherboard",
      link: "/category/motherboard",
    },
    {
      title: "RAM",
      link: "/category/ram",
    },
    {
      title: "Power Supply Unit",
      link: "/category/powerSupplyUnit",
    },
    {
      title: "Storage Device",
      link: "/category/storageDevice",
    },
    {
      title: "Monitor",
      link: "/category/monitor",
    },
    {
      title: "Others",
      link: "/category/others",
    },
  ];
  const categoryDropdownItems = ProductCategory.map((category, index) => ({
    key: `${index + 1}`,
    label: (
      <Link href={`/${category.link}`}>
        <span className="font-medium">{category.title}</span>
      </Link>
    ),
  }));
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-5 md:mb-0">
      <Link href="/" className="text-black no-underline	">
        Home
      </Link>
      <Dropdown menu={{ items: categoryDropdownItems }}>
        <Space>
          <span className="font-semibold">Category</span>
          <DownOutlined />
        </Space>
      </Dropdown>
    </div>
  );
};

export default LeftMenu;
