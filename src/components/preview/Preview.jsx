import "../../styles/Preview.css";
import BasicInfoView from "./BasicInfoView";
import ContactInfoView from "./ContactInfoView";
import EducationInfoView from "./EducationInfoView";
import ExperienceInfoView from "./ExperienceInfoView";

// eslint-disable-next-line react/prop-types
export default function Preview(props) {
  const { formData } = props;
  return (
    <div className="preview__container">
      <main className="preview__printable">
        <BasicInfoView data={formData.basicInfo}></BasicInfoView>
        <ContactInfoView data={formData.contactInfo}></ContactInfoView>
        <section className="preview__main-col">
          <EducationInfoView data={formData.educationInfo}></EducationInfoView>
          <ExperienceInfoView
            data={formData.experienceInfo}
          ></ExperienceInfoView>
        </section>
        {/* <section className="preview__sidebar"></section> */}
      </main>
    </div>
  );
}
