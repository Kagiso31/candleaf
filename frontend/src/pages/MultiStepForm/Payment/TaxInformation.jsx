const TaxInformations = ({ vatnumber, pec, updateFields }) => {
  return (
    <section className="tax">
      <h2 className="tax__title">Tax Information</h2>
      <div className="tax__form">
        <label className="visually-hidden" htmlFor="vatnumber">
          VAT number (optional)
        </label>
        <input
          id="vatnumber"
          className="tax__input"
          type="text"
          placeholder="VAT number (optional)"
          name="vatnumber"
          value={vatnumber}
          onChange={(e) => updateFields({ vatnumber: e.target.value })}
        />

        <label className="visually-hidden" htmlFor="pec">
          PEC (optional)
        </label>
        <input
          id="pec"
          className="tax__input"
          type="text"
          placeholder="PEC (optional)"
          name="pec"
          value={pec}
          onChange={(e) => updateFields({ pec: e.target.value })}
        />
      </div>
    </section>
  );
};

export default TaxInformations;
