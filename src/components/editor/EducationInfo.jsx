function EducationInfo(props) {
  const { data, handleChange } = props;
  return (
    <form className="form form__container form__basic-info">
      <h1 className="form-title">Education Background</h1>
      <fieldset className="form-fieldset form__basic-info">
        <label className="form-label">
          <span className="form-label__title">
            University/Institution/Organization::
          </span>
          <input
            type="text"
            name="university"
            onChange={handleChange}
            value={data.university}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Program/Degree/Course:</span>
          <input
            type="text"
            name="course"
            onChange={handleChange}
            value={data.course}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Starting Year:</span>
          <input
            type="date"
            name="startingDate"
            onChange={handleChange}
            value={data.startingDate}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Ending Year:</span>
          <input
            type="date"
            name="endingDate"
            onChange={handleChange}
            value={data.endingDate}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">GPA:</span>
          <input
            type="text"
            name="gpa"
            onChange={handleChange}
            value={data.gpa}
            className="form-input"
          ></input>
        </label>
      </fieldset>
    </form>
  );
}

export default EducationInfo;
