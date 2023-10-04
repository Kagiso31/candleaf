import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/candleaf/cart/details")) {
    return (
      <>
        <ScrollToTop />
        <Navbar />
        <Breadcrumbs />
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
