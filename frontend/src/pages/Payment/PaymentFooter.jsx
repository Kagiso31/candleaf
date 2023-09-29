import { Link } from "react-router-dom";

const PaymentFooter = () => {
  return (
    <section className="payment-footer">
      <button className="payment-footer__button btn btn-lg" type="submit">
        Pay now
      </button>
      <Link className="payment-footer__link" to="">
        Back to shipping
      </Link>
    </section>
  );
};

export default PaymentFooter;
