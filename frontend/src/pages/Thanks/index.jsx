import Navbar from "../../components/Navbar";
import Breadcrumbs from "../../components/Breadcrumbs";
import Summary from "../../components/Summary";
import Confirmation from "./Confirmation";
import ThanksFooter from "./ThanksFooter";

const Thanks = () => {
  return (
    <>
      <Navbar />
      {/* breadcrumbs placeholder */}
      <Breadcrumbs />

      <main>
        <div className="thanks | wrapper">
          <article className="thanks__details">
            <Confirmation />
            <ThanksFooter />
          </article>
          <article className="thanks__summary">
            <Summary />
          </article>
        </div>
      </main>
    </>
  );
};

export default Thanks;
