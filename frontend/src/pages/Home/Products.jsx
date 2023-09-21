import { products } from "../../data/data";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  return (
    <section className="products">
      <div className="products__text">
        <h2 className="products__title">Products</h2>
        <p className="prroducts__subtitle">
          Order it for you or your beloved ones
        </p>
      </div>
      <div className="products__container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
