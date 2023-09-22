import Navbar from "../../components/Navbar";
import Benefits from "./Benefits";
import Hero from "./Hero";
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
    </>
  );
};

export default Home;
