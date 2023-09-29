import Breadcrumbs from "../../components/Breadcrumbs";
import Navbar from "../../components/Navbar";
import Summary from "../../components/Summary";
import ShippingFooter from "./ShippingFooter";
import ShippingInfo from "./ShippingInfo";
import ShippingMethod from "./ShippingMethod";

const Shipping = () => {
  return (
    <>
      <Navbar />

      {/* breadcrumbs placeholder */}
      <Breadcrumbs />

      <main>
        <div className="shipping | wrapper">
          <article className="shipping__details">
            <ShippingInfo />
            <ShippingMethod />
            <ShippingFooter />
          </article>
          <article className="shipping__summary">
            <Summary />
          </article>
        </div>
      </main>
    </>
  );
};

export default Shipping;
