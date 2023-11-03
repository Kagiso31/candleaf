import Quantity from "../../components/Quantity";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { products } from "../../data/data";
import { formatCurrency } from "../../utilities/formatCurrency";

const CartProduct = ({ id, quantity }) => {
  const product = products.find((item) => item.id === id);
  const { removeFromCart } = useShoppingCart();

  return (
    <div className="cart__product-row">
      <div className="cart__product">
        <div className="cart__product-image-container">
          <img
            className="cart__product-image"
            src={product.img}
            alt={product.title}
          />
        </div>
        <div className="cart__product-info">
          <h2 className="cart__product-name">{product.title} Candleaf&reg;</h2>
          <p
            className="cart__product-remove"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </p>
        </div>
      </div>
      <div className="cart__product-price">${product.price}</div>
      <div className="cart__product-quantity">
        <p className="mobile-only">Quantity</p>
        <Quantity id={id} quantity={quantity} />
      </div>
      <div className="cart__product-total | hide-on-mobile">
        {formatCurrency(product.price * quantity)}
      </div>
    </div>
  );
};

export default CartProduct;
