import { Link } from "react-router-dom";
import logo_dark from "../assets/logo-dark.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="wrapper">
          <hr className="footer__separator" />
          <div className="footer__container">
            <div className="footer__logo-container">
              <img src={logo_dark} className="footer__logo" />
              <p className="footer__slogan">
                Your natural candle made for your home and for your wellness.
              </p>
            </div>
            <nav className="footer__nav">
              <ul role="list" className="footer__nav-list">
                <section className="footer__nav__section">
                  <h3 className="footer__nav__section-title">Discovery</h3>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      New season
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      Most searched
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      Most sold
                    </Link>
                  </li>
                </section>
                <section className="footer__nav__section">
                  <h3 className="footer__nav__section-title">About</h3>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      Help
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      Shipping
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      Affiliate
                    </Link>
                  </li>
                </section>
                <section className="footer__nav__section">
                  <h3 className="footer__nav__section-title">Info</h3>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      Contact us
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      Privacy Policies
                    </Link>
                  </li>
                  <li className="footer__nav__item">
                    <Link to="#" className="footer__nav__link">
                      Terms & Conditions
                    </Link>
                  </li>
                </section>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      <section className="footer__attribution">
        <div className="footer__attribution__container | wrapper">
          <p>©Candleaf All Rights Reserved.</p>
          <p>
            Designed by <a href="https://www.figma.com/@uxbly">uxbly</a> |
            Created by{" "}
            <a href="https:/www.github.com/Kagiso31">
              Kagiso31<i className="bi bi-github"></i>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
