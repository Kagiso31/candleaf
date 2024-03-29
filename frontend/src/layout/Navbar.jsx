import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-light.jpg";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();

  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const location = useLocation();
  if (location.pathname.startsWith("/candleaf/cart/details"))
    return (
      <header className="primary-header | wrapper">
        <div></div>
        <div className="logo-container logo-container-mobile">
          <Link className="logo-link" to="/candleaf">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div></div>
      </header>
    );

  return (
    <header className="primary-header | wrapper">
      <nav className="nav">
        <button
          onClick={toggleNav}
          id="hamburger"
          className="hamburger"
          aria-expanded={navOpen}
        >
          <span className="hamburger__line"></span>
          <span className="visually-hidden">Menu</span>
        </button>
        <ul role="list" className="nav__list" data-visible={navOpen}>
          <li className="nav__item">
            <button
              onClick={toggleDropdown}
              className="nav__link dropdown__button"
              type="button"
              aria-expanded={dropdownOpen}
              data-dropdown="dropdown"
            >
              <span>Discover</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-chevron-down chevron-down-icon"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="dropdown__content"
              data-visible={dropdownOpen}
            >
              <ul role="list">
                <li className="dropdown__item">
                  <NavLink className="dropdown__link" to="/candleaf#products">
                    Browse Collection
                  </NavLink>
                </li>
                <li className="dropdown__item">
                  <NavLink className="dropdown__link" to="/candleaf#popular">
                    Popular Products
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="#">
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="#">
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo-container">
        <Link className="logo-link" to="/candleaf">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="primary-header__right">
        <div className="profile-container">
          <button
            type="button"
            id="dropdown2"
            className="dropdown__button"
            data-dropdown="dropdown2"
            aria-expanded="false"
          >
            <span className="visually-hidden">Profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person profile-icon primary-header__icon"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </button>
          <div id="dropdown2" className="dropdown__content">
            <ul role="list">
              <li>
                <NavLink className="dropdown__link">Register</NavLink>
              </li>
              <li>
                <NavLink className="dropdown__link">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-container">
          <NavLink to="/candleaf/cart">
            <span className="visually-hidden">Cart</span>
            <div className="cart-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-cart3 cart-icon primary-header__icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span className="cart-icon-quantity">{cartQuantity}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
