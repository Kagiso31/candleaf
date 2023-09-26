import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/candleaf/products/${product.id}`}>
      <div className="product-card">
        <div className="product-card__image-container">
          <img
            className="product-card__image"
            src={product.img}
            alt={product.title}
          />
        </div>
        <div className="product-card__text">
          <h3 className="product-card__title">{product.title}</h3>
          <p className="product-card__price">{product.price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
