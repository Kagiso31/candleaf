import PaymentMethod from "./PaymentMethod";
import TaxInformation from "./TaxInformation";
import BillingAddress from "./BillingAddress";
import ShippingInfo from "./ShippingInfo";
import { useOutletContext } from "react-router-dom";

const Payment = () => {
  const [data, updateFields] = useOutletContext();
  return (
    <div className="payment">
      <ShippingInfo {...data} />
      <PaymentMethod {...data} updateFields={updateFields} />
      <TaxInformation {...data} updateFields={updateFields} />
      <BillingAddress {...data} updateFields={updateFields} />
    </div>
  );
};

export default Payment;
