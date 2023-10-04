import { Link } from "react-router-dom";

const ShippingInfo = ({ contact, address }) => {
  return (
    <section className="shipping-info">
      <div className="shipping-info__contact-container">
        <h2 className="shipping-info__contact-title">Contact</h2>
        <p className="shipping-info__contact">{contact}</p>
        <Link to="/candleaf/cart/details" className="shipping-info__link">
          Edit
        </Link>
      </div>
      <hr />
      <div className="shipping-info__address-container">
        <h2 className="shipping-info__address-title">Ship to</h2>
        <p className="shipping-info__address">{address}</p>
        <Link to="/candleaf/cart/details" className="shipping-info__link">
          Edit
        </Link>
      </div>
      <hr />
      <div className="shipping-info__method-container">
        <h2 className="shipping-info__method-title">Method</h2>
        <p className="shipping-info__method">Standard Shipping - FREE</p>
        <Link
          to="/candleaf/cart/details/shipping"
          className="shipping-info__link"
        >
          Edit
        </Link>
      </div>
    </section>
  );
};

export default ShippingInfo;
