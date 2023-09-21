import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/candleaf" element={<Home />} />
      <Route path="/candleaf/cart" element={<Cart />} />
      <Route path="/candleaf/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
