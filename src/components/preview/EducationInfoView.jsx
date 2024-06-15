import format from "date-fns/format";
function EducationInfoView(props) {
  const { data } = props;
  const formatDate = (str) => {
    try {
      return format(new Date(str), "MMM yyyy");
    } catch (error) {
      return "Oct 2010";
    }
  };

  const startDate = data.startingDate
    ? formatDate(data.startingDate)
    : "Oct 2010";
  const endDate = data.endingDate ? formatDate(data.endingDate) : "";
  return (
    <section className="preview-area preview-area__educ-info">
      <h1 className="preview-title">Education Background</h1>
      <div className="preview-unit__educ-info">
        <div className="preview__info-main-header">
          <div className="preview__info-main-wrapper">
            <h2 className="preview__institution">
              {data.university || "University of London"}
            </h2>
            <h2 className="preview__degree-program">
              {data.course || "Ph.D in Philosophy"}
            </h2>
          </div>
          <span className="preview__active-years">
            {startDate + " - " + endDate}
          </span>
        </div>

        <ul>
          <li className="preview__educ-additional-info">
            Awards: 1st Place, Competition; 2nd Place, Competition
          </li>
          <li className="preview__educ-additional-info">
            Organizations: Organization 1, Organization 2
          </li>
          <li className="preview__educ-additional-info">
            GPA: {data.gpa || "9"}.0
          </li>
        </ul>
      </div>
    </section>
  );
}
export default EducationInfoView;
