import Contact from "./Contact";
import ShippingAddress from "./ShippingAddress";
import { useOutletContext } from "react-router-dom";

const Authentication = () => {
  const [data, updateFields] = useOutletContext();
  return (
    <section className="auth">
      <Contact {...data} updateFields={updateFields} />
      <ShippingAddress {...data} updateFields={updateFields} />
    </section>
  );
};

export default Authentication;
