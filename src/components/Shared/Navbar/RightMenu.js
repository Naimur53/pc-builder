import React from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";

const RightMenu = ({ mode }) => {
  return (
    <div>
      <Avatar icon={<UserOutlined />} />
      <span className="ml-3 font-bold">John Doe</span>
    </div>
  );
};

export default RightMenu;
