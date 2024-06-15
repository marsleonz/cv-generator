function BasicInfo(props) {
  const { data, handleChange } = props;
  return (
    <form className="form form__container form__basic-info">
      <h1 className="form-title">Basic Info</h1>
      <fieldset className="form-fieldset form__basic-info">
        <label className="form-label">
          <span className="form-label__title">First name:</span>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Last name:</span>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Professional title:</span>
          <input
            type="text"
            name="occupation"
            onChange={handleChange}
            value={data.occupation}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">
            Give a summary about yourself:
          </span>
          <textarea
            cols={30}
            rows={10}
            name="summary"
            onChange={handleChange}
            value={data.summary}
            className="form-input"
          ></textarea>
        </label>
      </fieldset>
    </form>
  );
}

export default BasicInfo;
