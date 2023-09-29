import { Link } from "react-router-dom";

const ShippingInfo = () => {
  return (
    <section className="shipping-info">
      <div className="shipping-info__contact-container">
        <h2 className="shipping-info__contact-title">Contact</h2>
        <p className="shipping-info__contact">joe.spagnuolo@uxbly.com</p>
        <Link className="shipping-info__link">Edit</Link>
      </div>
      <hr />
      <div className="shipping-info__address-container">
        <h2 className="shipping-info__address-title">Ship to</h2>
        <p className="shipping-info__address">
          Via Firenze 23, 92023, Campobello di Licata AG, Italia
        </p>
        <Link className="shipping-info__link">Edit</Link>
      </div>
    </section>
  );
};

export default ShippingInfo;
