import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const CartMain = () => {
  return (
    <main className="cart | wrapper">
      <div className="cart__heading">
        <h1 className="cart__title">Your cart items</h1>
        <Link className="cart__link" to="/candleaf/">
          Back to shopping
        </Link>
      </div>

      <div className="cart__table-header">
        <div className="cart__table-cell">Product</div>
        <div className="cart__table-cell">Price</div>
        <div className="cart__table-cell | hide-on-mobile">Quantity</div>
        <div className="cart__table-cell | hide-on-mobile">Total</div>
      </div>

      <CartProduct />

      <div className="cart__checkout-section">
        <div>
          <div className="cart__subtotal-container">
            <p className="cart__subtotal-text">Sub-total</p>
            <p className="cart__subtotal-price">$9.99</p>
          </div>
          <p className="cart__tax-text">
            Tax and shipping cost will be calculated later
          </p>
        </div>

        <Link to="/candleaf/cart/details">
          <button type="button" className="cart__button btn btn-lg">
            Checkout
          </button>
        </Link>
      </div>
    </main>
  );
};

export default CartMain;
