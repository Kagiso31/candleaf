import { Link } from "react-router-dom";

const Contact = ({ contact, addToNewsletter, updateFields }) => {
  return (
    <section className="contact">
      <div className="contact__heading">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__account">
          Do you have an account? <Link>Login</Link>
        </p>
      </div>
      <div className="contact__form">
        <div className="contact__form-group">
          <label className="visually-hidden" htmlFor="contact">
            Email or mobile phone number
          </label>
          <input
            id="contact"
            className="contact__contact-input"
            type="text"
            placeholder="Email or mobile phone number"
            name="contact"
            value={contact}
            onChange={(e) => updateFields({ contact: e.target.value })}
            required
          />
        </div>

        <div className="contact__form-group">
          <input
            className="contact__newsletter-checkbox"
            type="checkbox"
            id="newsletter"
            name="newsletter"
            value="newsletter"
            checked={addToNewsletter}
            onChange={(e) =>
              updateFields({ addToNewsletter: e.target.checked })
            }
          />
          <label className="contact__newsletter-label" htmlFor="newsletter">
            Add me to the Candleaf newsletter for a 10% discount
          </label>
        </div>
      </div>
    </section>
  );
};

export default Contact;
