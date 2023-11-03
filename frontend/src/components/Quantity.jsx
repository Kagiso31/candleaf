import { useLocation } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Quantity = ({ id, quantity, setQuantity }) => {
  const location = useLocation();
  const currentPage = location.pathname;

  // Cart Page functionality
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  // Product Page functionality
  const increaseProductQuantity = () => {
    if (quantity === 9) return;
    setQuantity((currentValue) => currentValue + 1);
  };

  const decreaseProductQuantity = () => {
    if (quantity === 1) return;
    setQuantity((currentValue) => currentValue - 1);
  };

  return (
    <div className="quantity">
      <button
        className="quantity__button"
        type="button"
        onClick={() => {
          if (currentPage === "/candleaf/cart") {
            decreaseCartQuantity(id);
          } else {
            decreaseProductQuantity();
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-dash quantity__icon"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
      <span className="quantity__text">{quantity}</span>
      <button
        className="quantity__button"
        type="button"
        onClick={() => {
          if (currentPage === "/candleaf/cart") {
            increaseCartQuantity(id);
          } else {
            increaseProductQuantity();
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-plus quantity__icon"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </div>
  );
};

export default Quantity;
