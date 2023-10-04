const ShippingMethod = ({ shippingmethod, updateFields }) => {
  return (
    <section className="shipping-method">
      <h2 className="shipping-method__heading">Shipping Method</h2>
      <div className="shipping-method__container">
        <label className="shipping-method__label" htmlFor="standard">
          Standard Shipping
          <input
            id="standard"
            className="shipping-method__checkbox"
            type="checkbox"
            name="shippingmethod"
            value="standard"
            checked={shippingmethod === "standard"}
            onChange={(e) => updateFields({ shippingmethod: e.target.value })}
          />
          <span className="checkmark"></span>
        </label>
        <p className="shipping-method__price">Free</p>
      </div>
    </section>
  );
};

export default ShippingMethod;
