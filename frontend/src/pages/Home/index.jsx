import Navbar from "../../components/Navbar";
import Benefits from "./Benefits";
import Hero from "./Hero";
import Popular from "./Popular";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <Testimonials />
        <Popular />
      </main>
      <Footer />
    </>
  );
};

export default Home;
