const ShippingAddress = ({
  firstname,
  lastname,
  address,
  shippingnote,
  city,
  postalcode,
  province,
  country,
  saveinfo,
  updateFields,
}) => {
  return (
    <section className="shipping-address">
      <h2 className="shipping-address__title">Shipping Address</h2>

      <div className="shipping-address__form">
        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="firstname">
            Name
          </label>
          <input
            id="firstname"
            className="shipping-address__input"
            type="text"
            placeholder="Name"
            name="firstname"
            value={firstname}
            onChange={(e) => updateFields({ firstname: e.target.value })}
            required
          />
        </div>

        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="lastname">
            Last Name
          </label>
          <input
            id="lastname"
            className="shipping-address__input"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={lastname}
            onChange={(e) => updateFields({ lastname: e.target.value })}
            required
          />
        </div>

        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="address">
            Address and number
          </label>
          <input
            id="address"
            className="shipping-address__input"
            type="text"
            placeholder="Address and number"
            name="address"
            value={address}
            onChange={(e) => updateFields({ address: e.target.value })}
            required
          />
        </div>

        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="shippingnote">
            Shipping note (optional)
          </label>
          <input
            id="shippingnote"
            className="shipping-address__input"
            type="text"
            placeholder="Shipping note (optional)"
            name="shippingnote"
            value={shippingnote}
            onChange={(e) => updateFields({ shippingnote: e.target.value })}
          />
        </div>

        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="city">
            City
          </label>
          <input
            id="city"
            className="shipping-address__input"
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            required
          />
        </div>
        <div className="shipping-address__form-group">
          <label className="visually-hidden" htmlFor="postalcode">
            Postal Code
          </label>
          <input
            id="postalcode"
            className="shipping-address__input"
            type="text"
            placeholder="Postal Code"
            name="postalcode"
            value={postalcode}
            onChange={(e) => updateFields({ postalcode: e.target.value })}
            required
          />
        </div>

        <div className="shipping-address__form-group shipping-address__dropdown">
          <label htmlFor="province">Province</label>
          <select
            id="province"
            name="province"
            value={province}
            onChange={(e) => updateFields({ province: e.target.value })}
            required
          >
            <option value="" disabled>
              Province
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
          <select
            id="country"
            name="country"
            value={country}
            onChange={(e) => updateFields({ country: e.target.value })}
            required
          >
            <option value="" disabled>
              Country
            </option>
            <option value="South Africa">South Africa</option>
          </select>
        </div>

        <div className="shipping-address__form-group">
          <input
            className="shipping-address__checkbox"
            type="checkbox"
            name="saveinfo"
            value="saveinfo"
            id="saveinfo"
            checked={saveinfo}
            onChange={(e) => updateFields({ saveinfo: e.target.checked })}
          />
          <label
            className="shipping-address__checkbox-label"
            htmlFor="saveinfo"
          >
            Save this information for a future fast checkout
          </label>
        </div>
      </div>
    </section>
  );
};

export default ShippingAddress;
