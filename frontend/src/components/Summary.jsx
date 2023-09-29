const Summary = () => {
  return (
    <div className="summary | hide-on-mobile">
      <div className="summary__wrapper">
        <div className="summary__product">
          <div className="summary__image-container">
            <span className="summary__item-count">1</span>
            <img
              src="/src/assets/products/spiced-mint.png"
              alt=""
              className="summary__image"
            />
          </div>
          <div className="summary__product-info">
            <h3 className="summary__product-name">Spiced Mint Candleaf&reg;</h3>
            <p className="summary__product-price">$9.99</p>
          </div>
        </div>
        <div className="summary__coupon-container">
          <input
            className="summary__coupon-input"
            type="text"
            placeholder="Coupon code"
          />
          <button className="summary__coupon-button" type="button">
            Add code
          </button>
        </div>
        <div className="summary__subtotal-container">
          <p className="summary__subtotal-text">Subtotal</p>
          <p className="summary__subtotal-amount">$9.99</p>
        </div>
        <div className="summary__shipping-container">
          <p className="summary__shipping-text">Shipping</p>
          <p className="summary__shipping-amount">
            Calculated at the next step
          </p>
        </div>
        <div className="summary__total-container">
          <p className="summary__total-text">Total</p>
          <p className="summary__total-amount">$9.99</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
