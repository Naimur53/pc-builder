import React, { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <div className="mb-[60px]">
      <nav className="fixed bg-white top-0 z-40 left-0 right-0">
        <div className="container ">
          <div className="flex px-4 md:px-2 justify-between items-center">
            <div className="py-4">
              <Link
                href={"/"}
                className="text-xl text-black no-underline  font-bold"
              >
                PC Builder
              </Link>
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
