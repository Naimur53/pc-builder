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
      <>
        <Avatar icon={<UserOutlined />} src={session.user.image} />
        <span className="ml-3 font-bold">{session.user.name}</span>
        <Button
          className="ml-2 bg-red-800 hover:opacity-80 opacity-100"
          type="primary"
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </>
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
