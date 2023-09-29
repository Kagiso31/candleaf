import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Authentication from "./pages/Authentication";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import Thanks from "./pages/Thanks";

const App = () => {
  return (
    <>
      {/* <Thanks /> */}
      {/* <Payment /> */}
      {/* <Shipping /> */}
      {/* <Authentication /> */}
      <ScrollToTop />
      <Routes>
        <Route index path="/candleaf" element={<Home />} />
        <Route path="/candleaf/products/:id" element={<Product />} />
        <Route path="/candleaf/cart" element={<Cart />} />
        <Route path="/candleaf/not-found" element={<NotFound />} />
        <Route path="/candleaf/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
