import heroImage from "../../assets/candles-bg.jpg";
import heroImageDesktop from "../../assets/candles-bg-desktop.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroImageDesktop} />
          <img className="hero__image" src={heroImage} alt="" />
        </picture>
        <div className="hero__text-container | wrapper">
          <h1 className="hero__title">
            <span>🌱</span>
            <span>The nature candle</span>
          </h1>
          <p className="hero__description">
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments
          </p>
          <button className="hero__button btn">Discover our collection</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
