import format from "date-fns/format";
function ExperienceInfoView(props) {
  const { data } = props;
  const formatDate = (str) => {
    try {
      return format(new Date(str), "MMM yyyy");
    } catch (error) {
      return "Oct 2014";
    }
  };

  const startDate = data.startingYear
    ? formatDate(data.startingYear)
    : "Oct 2014";
  const endDate = data.endingYear ? formatDate(data.endingYear) : "";
  return (
    <section className="preview-area preview-area__exp-info">
      <h1 className="preview-title">Work Experience</h1>

      <div className="preview-unit__exp-info">
        <div className="preview__info-main-header">
          <div className="preview__info-main-wrapper">
            <h2 className="preview__job-title">
              {data.position || "Business Analyst"}
            </h2>
            <h2 className="preview__company">
              {data.company || "Company Inc."}
            </h2>
          </div>
          <span className="preview__active-years">
            {startDate + " - " + endDate}
          </span>
        </div>

        <ul>
          <li className="preview__job-responsibility">
            {data.jobResponsibility || "Job responsibility"}
          </li>
        </ul>
      </div>
    </section>
  );
}
export default ExperienceInfoView;
