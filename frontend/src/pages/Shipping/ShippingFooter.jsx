import { Link } from "react-router-dom";

const ShippingFooter = () => {
  return (
    <section className="shipping-footer">
      <button className="shipping-footer__button btn btn-lg" type="submit">
        Go to payment
      </button>
      <Link className="shipping-footer__link" to="">
        Back to details
      </Link>
    </section>
  );
};

export default ShippingFooter;
