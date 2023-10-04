import ShippingInfo from "./ShippingInfo";
import ShippingMethod from "./ShippingMethod";
import { useOutletContext } from "react-router-dom";

const Shipping = () => {
  const [data] = useOutletContext();
  return (
    <section className="shipping">
      <ShippingInfo {...data} />
      <ShippingMethod {...data} />
    </section>
  );
};

export default Shipping;
