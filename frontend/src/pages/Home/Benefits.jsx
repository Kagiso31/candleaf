import candlesImg from "../../assets/candles.jpg";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits__heading">
        <h2 className="benefits__title">Clean and fragrant soy wax</h2>
        <p className="benefits__subtitle">
          Made for your home and for your wellness
        </p>
      </div>

      <div className="benefits__container">
        <div className="benefits__list-container">
          <ul className="benefits__list">
            <li className="benefits__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-check-circle benefits__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              <p className="benefits__item-text">
                <strong>Eco-sustainable:</strong> All recyclable materials, 0%
                CO2 emissions
              </p>
            </li>
            <li className="benefits__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-check-circle benefits__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              <p className="benefits__item-text">
                <strong>Hyphoallergenic:</strong> 100% natural, human friendly
                ingredients
              </p>
            </li>
            <li className="benefits__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-check-circle benefits__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              <p className="benefits__item-text">
                <strong>Handmade:</strong> All candles are craftly made with
                love.
              </p>
            </li>
            <li className="benefits__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-check-circle benefits__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              <p className="benefits__item-text">
                <strong>Long burning:</strong> No more waste. Created for last
                long.
              </p>
            </li>
          </ul>
          <button className="btn benefits__button">Learn more</button>
        </div>
        <div className="benefits__image-container">
          <img
            src={candlesImg}
            alt="spiced mint and juicy lemon scented candles"
            className="benefits__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
