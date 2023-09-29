const BillingAddress = () => {
  return (
    <section className="billing">
      <h2 className="billing__title">Billing Address</h2>
      <div className="billing__container">
        <div className="billing__same-address">
          <label className="billing__label" htmlFor="sameAddress">
            Same as the shipping address
            <input
              className="billing__radio"
              type="radio"
              name="billing"
              id="sameAddress"
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <hr className="billing__separator" />
        <div className="billing__different-address">
          <label className="billing__label" htmlFor="differentAddress">
            Use a different address for billing
            <input
              className="billing__radio"
              type="radio"
              name="billing"
              id="differentAddress"
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default BillingAddress;
