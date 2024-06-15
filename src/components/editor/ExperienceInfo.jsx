function ExperienceInfo(props) {
  const { data, handleChange } = props;
  return (
    <form className="form form__container form__basic-info">
      <h1 className="form-title">Work Experience</h1>
      <fieldset className="form-fieldset form__basic-info">
        <label className="form-label">
          <span className="form-label__title">Title/Position:</span>
          <input
            type="text"
            name="position"
            onChange={handleChange}
            value={data.position}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">
            Workplace/Company/Organization:
          </span>
          <input
            type="text"
            name="company"
            onChange={handleChange}
            value={data.company}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Starting Year:</span>
          <input
            type="date"
            name="startingYear"
            onChange={handleChange}
            value={data.startingYear}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Ending Year:</span>
          <input
            type="date"
            name="endingYear"
            onChange={handleChange}
            value={data.endingYear}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Job Responsibilities:</span>
          <textarea
            cols={30}
            rows={10}
            name="jobResponsibility"
            onChange={handleChange}
            value={data.jobResponsibility}
            className="form-input"
          ></textarea>
        </label>
      </fieldset>
    </form>
  );
}

export default ExperienceInfo;
