import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { products } from "../data/data";
import { formatCurrency } from "../utilities/formatCurrency";

const SummaryProduct = ({ id, quantity }) => {
  const product = products.find((item) => item.id === id);
  return (
    <div className="summary__product">
      <div className="summary__image-container">
        <span className="summary__item-count">{quantity}</span>
        <img src={product.img} alt={product.title} className="summary__image" />
      </div>
      <div className="summary__product-info">
        <h3 className="summary__product-name">{product.title} Candleaf&reg;</h3>
        <p className="summary__product-price">${product.price}</p>
      </div>
    </div>
  );
};

const Summary = ({ couponcode, shippingmethod, updateFields, viewport }) => {
  const { cartItems } = useShoppingCart();
  const { cartQuantity } = useShoppingCart();

  let total = formatCurrency(
    cartItems.reduce((total, cartItem) => {
      const product = products.find((item) => item.id === cartItem.id);
      return total + (product?.price || 0) * cartItem.quantity;
    }, 0)
  );
  const location = useLocation();
  const currentPage = location.pathname;
  let isPaid = false;
  if (currentPage === "/cart/details/shipping/payment/thanks") isPaid = true;

  if (viewport === "desktop") {
    return (
      <section className="summary | hide-on-mobile">
        <div className="summary__wrapper">
          {cartItems.map((item) => (
            <SummaryProduct key={item.id} {...item} />
          ))}

          <div className="summary__coupon-container">
            <input
              id="coupon"
              className="summary__coupon-input"
              type="text"
              placeholder="Coupon code"
              value={couponcode}
              onChange={(e) => updateFields({ couponcode: e.target.value })}
            />
            <button className="summary__coupon-button" type="button"></button>
          </div>
          <div className="summary__subtotal-container">
            <p className="summary__subtotal-text">Subtotal</p>
            <p className="summary__subtotal-amount">{total}</p>
          </div>
          <div className="summary__shipping-container">
            <p className="summary__shipping-text">Shipping</p>
            <p className="summary__shipping-amount">
              {shippingmethod === "standard" && "Free Shipping"}
            </p>
          </div>
          {isPaid ? (
            <div className="summary__paid-container">
              <p className="summary__paid-text">Paid</p>
              <p className="summary__paid-amount">$9.99</p>
            </div>
          ) : (
            <div className="summary__total-container">
              <p className="summary__total-text">Total</p>
              <p className="summary__total-amount">{total}</p>
            </div>
          )}
        </div>
      </section>
    );
  }

  if (viewport === "mobile") {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="summary-mobile">
        <div className="summary-mobile__container">
          <div className="summary-mobile__icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={
                isPaid
                  ? "bi bi-cart3 summary-mobile__cart-icon summary-mobile__cart-icon--green"
                  : "bi bi-cart3 summary-mobile__cart-icon"
              }
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            {!isPaid && (
              <span className="summary-mobile__quantity">{cartQuantity}</span>
            )}
          </div>
          {isPaid ? (
            <p className="summary-mobile__order-paid-text">Order Paid</p>
          ) : (
            <button
              onClick={() => setIsActive(!isActive)}
              className="summary-mobile__dropdown-button"
              type="button"
            >
              <h2 className="summary-mobile__dropdown-text">
                See your order details
              </h2>
              {/* chevron down */}
              {!isActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-chevron-down summary-mobile__dropdown-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
              {/* chevron up */}
              {isActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-chevron-up summary-mobile__dropdown-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              )}
            </button>
          )}
          <p className="summary-mobile__price">{total}</p>
        </div>
        {isActive && (
          <div className="summary-mobile__dropdown-content">
            <div className="summary__wrapper">
              {/* loop through cart items here */}
              {cartItems.map((item) => (
                <SummaryProduct key={item.id} {...item} />
              ))}
              {/* <div className="summary__product">
                <div className="summary__image-container">
                  <span className="summary__item-count">1</span>
                  <img
                    src="/src/assets/products/spiced-mint.png"
                    alt=""
                    className="summary__image"
                  />
                </div>
                <div className="summary__product-info">
                  <h3 className="summary__product-name">
                    Spiced Mint Candleaf&reg;
                  </h3>
                  <p className="summary__product-price">$9.99</p>
                </div>
              </div> */}
              <div className="summary__coupon-container">
                <input
                  id="coupon"
                  className="summary__coupon-input"
                  type="text"
                  placeholder="Coupon code"
                  value={couponcode}
                  onChange={(e) => updateFields({ couponcode: e.target.value })}
                />
                <button
                  className="summary__coupon-button"
                  type="button"
                ></button>
              </div>
              <div className="summary__subtotal-container">
                <p className="summary__subtotal-text">Subtotal</p>
                <p className="summary__subtotal-amount">{total}</p>
              </div>
              <div className="summary__shipping-container">
                <p className="summary__shipping-text">Shipping</p>
                <p className="summary__shipping-amount">
                  {shippingmethod === "standard" && "Free Shipping"}
                </p>
              </div>
              <div className="summary__total-container">
                <p className="summary__total-text">Total</p>
                <p className="summary__total-amount">{total}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Summary;
