const TaxInformations = () => {
  return (
    <section className="tax">
      <h2 className="tax__title">Tax Information</h2>
      <form className="tax__form">
        <label className="visually-hidden" htmlFor="vatNumber">
          VAT number (optional)
        </label>
        <input
          className="tax__input"
          id="vatNumber"
          type="text"
          placeholder="VAT number (optional)"
        />

        <label className="visually-hidden" htmlFor="pec">
          PEC (optional)
        </label>
        <input
          className="tax__input"
          id="pec"
          type="text"
          placeholder="PEC (optional)"
        />
      </form>
    </section>
  );
};

export default TaxInformations;
