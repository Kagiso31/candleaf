const ShippingMethod = () => {
  return (
    <section className="shipping-method">
      <h2 className="shipping-method__heading">Shipping Method</h2>
      <div className="shipping-method__container">
        <label className="shipping-method__label" htmlFor="standardShipping">
          Standard Shipping
          <input
            className="shipping-method__checkbox"
            type="checkbox"
            name="shipping-method"
            id="standardShipping"
          />
          <span className="checkmark"></span>
        </label>
        <p className="shipping-method__price">Free</p>
      </div>
    </section>
  );
};

export default ShippingMethod;
