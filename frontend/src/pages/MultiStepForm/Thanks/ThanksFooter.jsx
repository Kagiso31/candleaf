import { Link } from "react-router-dom";

const ThanksFooter = ({ data }) => {
  const printReceipt = () => {
    console.log(data);
  };
  return (
    <section className="thanks-footer">
      <Link to="/candleaf">
        <button type="button" className="thanks-footer__button btn btn-lg">
          Back to shopping
        </button>
      </Link>
      <button
        type="button"
        className="thanks-footer__link"
        onClick={printReceipt}
      >
        Print receipt
      </button>
    </section>
  );
};

export default ThanksFooter;
