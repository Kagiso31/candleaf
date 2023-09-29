import { useParams, Navigate } from "react-router-dom";
import Quantity from "../../components/Quantity";
import Subscription from "./Subscription";
import { products } from "../../data/data";

const ProductMain = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

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
              <Quantity />
            </div>
          </div>
          <Subscription />
        </div>
        <div className="product__button-container">
          <button className="product__button btn btn-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-cart2 add-to-cart-icon"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
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
