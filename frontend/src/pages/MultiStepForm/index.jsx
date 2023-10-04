import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Summary from "../../components/Summary";
import { useLocation, useNavigate } from "react-router-dom";

const INITIAL_DATA = {
  // personal details
  contact: "",
  addToNewsletter: false,

  // shipping address
  firstname: "",
  lastname: "",
  address: "",
  shippingnote: "",
  city: "",
  postalcode: "",
  province: "",
  country: "",
  saveinfo: false,

  // shipping method
  shippingmethod: "standard",

  // payment method
  cardnumber: "",
  holdername: "",
  expiration: "",
  cvv: "",

  // tax information
  vatnumber: "",
  pec: "",

  //billing address
  billingaddress: "different",

  // coupon code
  couponcode: "",
};

const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const location = useLocation();
  const navigate = useNavigate();
  const authenticationPage =
    "/candleaf/cart/details" || "/candleaf/cart/details/";
  const shippingPage =
    "/candleaf/cart/details/shipping" || "/candleaf/cart/details/shipping/";
  const paymentPage =
    "/candleaf/cart/details/shipping/payment" ||
    "/candleaf/cart/details/shipping/payment/";
  const thanksPage =
    "/candleaf/cart/details/shipping/payment/thanks" ||
    "/candleaf/cart/details/shipping/payment/thanks/";

  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (currentPage) {
      case authenticationPage:
        navigate("/candleaf/cart/details/shipping");
        break;
      case shippingPage:
        navigate("/candleaf/cart/details/shipping/payment");
        break;
      case paymentPage:
        navigate("/candleaf/cart/details/shipping/payment/thanks");
        break;
      default:
        break;
    }
  };

  const prevPage = () => {
    switch (currentPage) {
      case authenticationPage:
        navigate("/candleaf/cart");
        break;
      case shippingPage:
        navigate("/candleaf/cart/details");
        break;
      case paymentPage:
        navigate("/candleaf/cart/details/shipping");
        break;
      default:
        break;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__grid | wrapper">
        <article className="form__details">
          <Outlet context={[data, updateFields]} />
          {currentPage !== thanksPage && (
            <div className="form__footer">
              <button className="form__button btn btn-lg" type="submit">
                {currentPage === authenticationPage && "Go to shipping"}
                {currentPage === shippingPage && "Go to payment"}
                {currentPage === paymentPage && "Pay now"}
              </button>
              <button type="button" className="form__link" onClick={prevPage}>
                {currentPage === authenticationPage && "Back to cart"}
                {currentPage === shippingPage && "Back to details"}
                {currentPage === paymentPage && "Back to shipping"}
              </button>
            </div>
          )}
        </article>
        <article>
          <Summary {...data} updateFields={updateFields} />
        </article>
      </div>
    </form>
  );
};

export default MultiStepForm;
