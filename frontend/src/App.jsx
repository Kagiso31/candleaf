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
import MultiStepForm from "./pages/MultiStepForm";

// layouts
import RootLayout from "./layout/RootLayout";
import Shipping from "./pages/MultiStepForm/Shipping";
import Payment from "./pages/MultiStepForm/Payment";
import Thanks from "./pages/MultiStepForm/Thanks";
import Authentication from "./pages/MultiStepForm/Authentication";

// context
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/candleaf" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="cart">
        <Route index element={<Cart />} />
        <Route path="details" element={<MultiStepForm />}>
          <Route index element={<Authentication />} />
          <Route path="shipping">
            <Route index element={<Shipping />} />
            <Route path="payment">
              <Route index element={<Payment />} />
              <Route path="thanks">
                <Route index element={<Thanks />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="products">
        <Route path=":id" element={<Product />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
};

export default App;
