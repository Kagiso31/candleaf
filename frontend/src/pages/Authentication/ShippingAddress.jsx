import { Link } from "react-router-dom";

const ShippingAddress = () => {
  return (
    <section className="shipping-address">
      <h2 className="shipping-address__title">Shipping Address</h2>

      <form className="shipping-address__form">
        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="firstName">
            Name
          </label>
          <input
            className="shipping-address__input"
            id="firstName"
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shipping-address__input"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="address">
            Address and number
          </label>
          <input
            className="shipping-address__input"
            id="address"
            type="text"
            placeholder="Address and number"
          />
        </div>

        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="shippingNote">
            Shipping note (optional)
          </label>
          <input
            className="shipping-address__input"
            id="shippingNote"
            type="text"
            placeholder="Shipping note (optional)"
          />
        </div>

        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="city">
            City
          </label>
          <input
            className="shipping-address__input"
            id="city"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="postalCode">
            Postal Code
          </label>
          <input
            className="shipping-address__input"
            id="postalCode"
            type="text"
            placeholder="Postal Code"
          />
        </div>

        <div className="shipping-address__form-group shipping-address__dropdown">
          <label htmlFor="province">Province</label>
          <select name="province" id="province">
            <option defaultValue="" disabled>
              Select your province
            </option>
            <option value="Eastern Cape">Eastern Cape</option>
            <option value="Free State">Free State</option>
            <option value="Gauteng">Gauteng</option>
            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
            <option value="Limpopo">Limpopo</option>
            <option value="Mpumalanga">Mpumalanga</option>
            <option value="Northern Cape">Northern Cape</option>
            <option value="North West">North West</option>
            <option value="Western Cape">Western Cape</option>
          </select>
        </div>

        <div className="shipping-address__form-group shipping-address__dropdown">
          <label htmlFor="country">Country/Region</label>
          <select name="country" id="country">
            <option value="South Africa">South Africa</option>
          </select>
        </div>

        <div className="shipping-address__form-group">
          <input
            className="shipping-address__checkbox"
            type="checkbox"
            name="saveInfo"
            id="saveInfo"
          />
          <label
            className="shipping-address__checkbox-label"
            htmlFor="saveInfo"
          >
            Save this information for a future fast checkout
          </label>
        </div>
      </form>
      <div className="shipping-address__form__footer">
        <button className="shipping-address__button btn btn-lg" type="submit">
          Go to shipping
        </button>
        <Link className="shipping-address__link" to="/candleaf/cart">
          Back to cart
        </Link>
      </div>
    </section>
  );
};

export default ShippingAddress;
