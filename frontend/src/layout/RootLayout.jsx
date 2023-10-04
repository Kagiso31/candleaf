import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/candleaf/cart/details")) {
    return (
      <>
        <ScrollToTop />
        <Navbar />
        <Outlet />
      </>
    );
  }
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
