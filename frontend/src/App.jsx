import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Authentication from "./pages/Authentication";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import Thanks from "./pages/Thanks";

// layouts
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/candleaf" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />

      <Route path="products">
        <Route path=":id" element={<Product />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Thanks /> */}
      {/* <Payment /> */}
      {/* <Shipping /> */}
      {/* <Authentication /> */}
    </>
  );
};

export default App;
