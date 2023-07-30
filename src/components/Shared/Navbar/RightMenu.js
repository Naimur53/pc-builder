import React from "react";
import { Menu, Avatar, Button } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

const RightMenu = ({ mode }) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  if (session) {
    return (
      <div className="flex items-center md:flex-row flex-col ">
        <Avatar
          className="md:hidden block"
          size={100}
          icon={<UserOutlined />}
          src={session.user.image}
        />
        <Avatar
          className="md:block hidden"
          icon={<UserOutlined />}
          src={session.user.image}
        />
        <span className="ml-3 text-xl md:text-normal my-1 font-bold">
          {session.user.name}
        </span>
        <div>
          <Button
            className="ml-2 bg-red-800 hover:opacity-80 opacity-100"
            type="primary"
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Button type="primary" onClick={() => router.push("/login")}>
        Sign In
      </Button>
    </>
  );
};

export default RightMenu;
