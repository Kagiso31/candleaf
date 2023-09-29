import { Link } from "react-router-dom";

const ThanksFooter = () => {
  return (
    <section className="thanks-footer">
      <button className="thanks-footer__button btn btn-lg" type="submit">
        Back to shopping
      </button>
      <Link className="thanks-footer__link" to="">
        Print receipt
      </Link>
    </section>
  );
};

export default ThanksFooter;
