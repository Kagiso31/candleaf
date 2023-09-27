import Quantity from "../../components/Quantity";

const CartProduct = () => {
  const handleRemove = () => {};
  return (
    <div className="cart__product-row">
      <div className="cart__product">
        <div className="cart__product-image-container">
          <img
            className="cart__product-image"
            src="/src/assets/products/spiced-mint.png"
            alt="spiced-mint"
          />
        </div>
        <div className="cart__product-info">
          <h2 className="cart__product-name">Spiced Mint Candleaf&reg;</h2>
          <p className="cart__product-remove" onClick={handleRemove}>
            Remove
          </p>
        </div>
      </div>
      <div className="cart__product-price">$9.99</div>
      <div className="cart__product-quantity">
        <p className="mobile-only">Quantity</p>
        <Quantity />
      </div>
      <div className="cart__product-total hide-on-mobile">$9.99</div>
    </div>
  );
};

export default CartProduct;
