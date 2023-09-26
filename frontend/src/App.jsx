import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

const App = () => {
  return (
    <Routes>
      <Route index path="/candleaf" element={<Home />} />
      <Route path="/candleaf/products/:id" element={<Product />} />
      <Route path="/candleaf/cart" element={<Cart />} />
      <Route path="/candleaf/not-found" element={<NotFound />} />
      <Route path="/candleaf/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
