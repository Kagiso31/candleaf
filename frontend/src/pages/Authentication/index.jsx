import Navbar from "../../layout/Navbar";
import Breadcrumbs from "../../components/Breadcrumbs";
import Contact from "./Contact";
import ShippingAddress from "./ShippingAddress";
import Summary from "../../components/Summary";

const Authentication = () => {
  return (
    <>
      <Navbar />

      {/* summary for mobile */}

      {/* breadcrumbs placeholder */}
      <Breadcrumbs />

      <section className="auth | wrapper">
        <article className="auth__info">
          <Contact />
          <ShippingAddress />
        </article>
        <article className="auth__summary">
          <Summary />
        </article>
      </section>
    </>
  );
};

export default Authentication;
