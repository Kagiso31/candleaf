import Navbar from "../../layout/Navbar";
import Benefits from "./Benefits";
import Hero from "./Hero";
import Popular from "./Popular";
import Products from "./Products";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <Benefits />
        <Testimonials />
        <Popular />
      </main>
    </>
  );
};

export default Home;
