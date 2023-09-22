import { products } from "../../data/data";
import ProductCard from "../../components/ProductCard";

const Popular = () => {
  return (
    <section className="popular">
      <div className="popular__heading">
        <h2 className="popular__title">Popular</h2>
        <p className="popular__subtitle">
          Our top selling products that you may like
        </p>
      </div>
      <div className="popular__container">
        {products
          .filter((product) => product.tags.includes("popular"))
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default Popular;
