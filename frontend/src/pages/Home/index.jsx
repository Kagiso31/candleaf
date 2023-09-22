import Navbar from "../../components/Navbar";
import Benefits from "./Benefits";
import Hero from "./Hero";
import Popular from "./Popular";
import Products from "./Products";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Testimonials />
      <Popular />
    </>
  );
};

export default Home;
