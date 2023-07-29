import Navbar from "@/components/Shared/Navbar/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <Provider store={store}>
        <SessionProvider session={session}>
          <Navbar></Navbar>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </div>
  );
}
