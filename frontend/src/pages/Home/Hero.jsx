import heroImage from "../../assets/candles-bg.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img className="hero__image" src={heroImage} alt="Hero Image" />
        <div className="hero__text-container">
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
