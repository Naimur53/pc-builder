import React, { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <div className="mb-[60px]">
      <nav className="fixed top-0 left-0 right-0">
        <div className="container px-3 md:px-0">
          <div className="flex justify-between items-center">
            <div className="logo">
              <h3 className="font-bold">PC Builder</h3>
            </div>
            <div className="  ">
              <div className="w-full md:block hidden  ">
                <LeftMenu mode={"horizontal"} />
              </div>

              <Drawer
                title={"Brand Here"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                style={{ zIndex: 99999 }}
              >
                <LeftMenu mode={"inline"} />
                <RightMenu mode={"inline"} />
              </Drawer>
            </div>

            <div className="md:block hidden">
              <RightMenu />
            </div>

            <Button
              className="md:hidden block"
              type="text"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
