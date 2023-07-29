import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn, SessionContext } from "next-auth/react";

const LoginPage = () => {
  console.log(SessionContext);

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container flex justify-center">
        <div className={"w-[300px]"}>
          <div
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
            className={
              "flex items-center mt-20 py-3 px-5 rounded  bg-gray-100 shadow-xl cursor-pointer hover:opacity-80 opacity-100"
            }
          >
            <GithubOutlined className="text-2xl" />
            <h3 className="m-0 ml-4">Login With GitHub</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
