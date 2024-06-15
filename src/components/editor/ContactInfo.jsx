function ContactInfo(props) {
  const { data, handleChange } = props;
  return (
    <form className="form form__container form__basic-info">
      <h1 className="form-title">Contact Info</h1>
      <fieldset className="form-fieldset form__basic-info">
        <label className="form-label">
          <span className="form-label__title">Email:</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Phone Number:</span>
          <input
            type="number"
            name="phoneNumber"
            onChange={handleChange}
            value={data.phoneNumber}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Location:</span>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={data.location}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Website:</span>
          <input
            type="text"
            name="website"
            onChange={handleChange}
            value={data.website}
            className="form-input"
          ></input>
        </label>
      </fieldset>
    </form>
  );
}

export default ContactInfo;
