import { NavLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const chevronRightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-chevron-right breadcrumbs__icon"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
  return (
    <div className="breadcrumbs | wrapper">
      <nav className="breadcrumbs__nav">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "breadcrumbs__link breadcrumbs__link--active"
              : "breadcrumbs__link"
          }
          to="/candleaf/cart"
          style={{
            color: currentPage === "/candleaf/cart" ? "black" : "",
          }}
        >
          Cart
        </NavLink>
        {chevronRightIcon}

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "breadcrumbs__link breadcrumbs__link--active"
              : "breadcrumbs__link"
          }
          to="/candleaf/cart/details"
          style={{
            color: currentPage === "/candleaf/cart/details" ? "black" : "",
          }}
        >
          Details
        </NavLink>
        {chevronRightIcon}

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "breadcrumbs__link breadcrumbs__link--active"
              : "breadcrumbs__link"
          }
          to="/candleaf/cart/details/shipping"
          style={{
            color:
              currentPage === "/candleaf/cart/details/shipping" ? "black" : "",
          }}
        >
          Shipping
        </NavLink>
        {chevronRightIcon}

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "breadcrumbs__link breadcrumbs__link--active"
              : "breadcrumbs__link"
          }
          to="/candleaf/cart/details/shipping/payment"
          style={{
            color:
              currentPage === "/candleaf/cart/details/shipping/payment"
                ? "black"
                : "",
          }}
        >
          Payment
        </NavLink>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
