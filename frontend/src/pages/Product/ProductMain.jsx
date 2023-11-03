import { useParams, Navigate } from "react-router-dom";
import Quantity from "../../components/Quantity";
import Subscription from "./Subscription";
import { products } from "../../data/data";
import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const ProductMain = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useShoppingCart();

  if (!product) return <Navigate to="/candleaf/not-found" />;

  return (
    <main className="product | wrapper">
      <h1 className="product__name mobile-only">
        {product.title} Candleaf&reg;
      </h1>
      <div className="product__image-desc">
        <div className="product__image-container">
          <img
            className="product__image"
            src={product.img}
            alt={product.title}
          />
        </div>
        <p className="product__description | hide-on-mobile">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments. <span>🚚 Free Shipping</span>
        </p>
      </div>

      <div>
        <h1 className="product__name | hide-on-mobile">
          {product.title} Candleaf&reg;
        </h1>
        <div className="product__order-details">
          <div className="product__quantity-price">
            <p className="product__price">${product.price}</p>
            <div className="product__quantity">
              <p className="product__quantity__text">Quantity</p>
              <Quantity quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <Subscription />
        </div>
        <div className="product__button-container">
          <button
            className="product__button btn btn-lg"
            type="button"
            onClick={() => addToCart(parseInt(id), quantity)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-cart3 add-to-cart-icon"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            + Add to cart
          </button>
        </div>
        <div className="product__specifications">
          <p>
            <span>Wax:</span> {product.description.wax}
          </p>
          <p>
            <span>Fragrance:</span> {product.description.fragrance}
          </p>
          <p>
            <span>Burning Time:</span> {product.description.burningTime}
          </p>
          <p>
            <span>Dimensions:</span> {product.description.dimensions}
          </p>
          <p>
            <span>Weight:</span> {product.description.weight}
          </p>
        </div>
      </div>
      <p className="product__description mobile-only">
        All hand-made with natural soy wax, Candleaf is made for your pleasure
        moments. <span>🚚 Free Shipping</span>
      </p>
    </main>
  );
};

export default ProductMain;
