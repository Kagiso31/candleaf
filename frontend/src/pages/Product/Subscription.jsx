const Subscription = () => {
  return (
    <div className="subscription">
      <div className="subscription__group">
        <label className="subscription__label" htmlFor="oneTime">
          One time purchase
          <input
            className="subscription__radio"
            type="radio"
            name="subscription"
            id="oneTime"
          />
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="subscription__group">
        <div>
          <label className="subscription__label" htmlFor="subscribe">
            Subscribe and delivery every
            <input
              className="subscription__radio"
              type="radio"
              name="subscription"
              id="subscribe"
            />
            <span className="checkmark"></span>
          </label>
          <select
            className="subscription__dropdown"
            name="subscriptionDuration"
            id="subscriptionDuration"
          >
            <option value="4 weeks">4 weeks</option>
            <option value="6 weeks">6 weeks</option>
            <option value="8 weeks">8 weeks</option>
          </select>
        </div>
        <p className="subscription__desc">
          Subscribe now and get the 10% of discount on every recurring order.
          The discount will be applied at checkout. <span>See details</span>
        </p>
      </div>
    </div>
  );
};

export default Subscription;
