import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../data/data";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="wrapper">
        <div className="testimonials__heading">
          <h2 className="testimonials__title">Testimonials</h2>
          <p className="testimonials__subtitle">
            Some quotes from our happy customers
          </p>
        </div>
        <div className="testimonials__container">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
