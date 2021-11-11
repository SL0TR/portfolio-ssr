// components/layout.js

import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      {/* <Sidebar /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
