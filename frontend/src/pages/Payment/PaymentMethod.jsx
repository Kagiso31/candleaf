const PaymentMethod = () => {
  return (
    <section className="payment-method">
      <h2 className="payment-method__title">Payment Method</h2>
      <div className="payment-method__card-heading-container | hide-on-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-credit-card-fill payment-method__card-icon"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
        </svg>
        <h3 className="payment-method__card-heading">Credit Card</h3>
      </div>
      <div className="payment-method__card">
        <form className="payment-method__form">
          <div className="payment-method__form-group">
            <label className="visually-hidden" htmlFor="cardNumber">
              Card Number
            </label>
            <div>
              <input
                className="payment-method__input"
                id="cardNumber"
                type="text"
                placeholder="Card Number"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-lock-fill payment-method__lock-icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
            </div>
          </div>

          <div className="payment-method__form-group">
            <label className="visually-hidden" htmlFor="holderName">
              Holder Name
            </label>
            <input
              className="payment-method__input | no-icon"
              id="holderName"
              type="text"
              placeholder="Holder Name"
            />
          </div>

          <div className="payment-method__form-group">
            <label className="visually-hidden" htmlFor="expiration">
              Expiration (MM/YYYY)
            </label>
            <input
              className="payment-method__input | no-icon"
              id="expiration"
              type="text"
              placeholder="Expiration (MM/YYYY)"
            />
          </div>

          <div className="payment-method__form-group">
            <label className="visually-hidden" htmlFor="cvv">
              CVV
            </label>
            <div>
              <input
                className="payment-method__input"
                id="cvv"
                type="number"
                placeholder="CVV"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-info-square-fill payment-method__info-icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentMethod;
