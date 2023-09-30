import Breadcrumbs from "../../components/Breadcrumbs";
import Navbar from "../../layout/Navbar";
import Summary from "../../components/Summary";
import PaymentMethod from "./PaymentMethod";
import TaxInformations from "./TaxInformation";
import BillingAddress from "./BillingAddress";
import ShippingInfo from "./ShippingInfo";
import PaymentFooter from "./PaymentFooter";

const Payment = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <main>
        <div className="payment | wrapper">
          <article className="payment__details">
            <ShippingInfo />
            <PaymentMethod />
            <TaxInformations />
            <BillingAddress />
            <PaymentFooter />
          </article>
          <article className="payment__summary">
            <Summary />
          </article>
        </div>
      </main>
    </>
  );
};

export default Payment;
