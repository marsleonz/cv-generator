import "../../styles/Editor.css";
import "./BasicInfo";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

export default function Editor(props) {
  const {
    formData,
    handleBasicInfoChanges,
    handleContactInfoChanges,
    handleEducationInfoChanges,
    handleExperienceInfoChanges,
  } = props;
  return (
    <div className="editor">
      <header className="header">
        <h1 className="header-title">CV Generator</h1>
        <p className="header-description">
          Create your CV by filling out the forms below! Your CV will be
          dynamically updated in the preview.
        </p>
      </header>
      <BasicInfo
        data={formData.basicInfo}
        handleChange={handleBasicInfoChanges}
      ></BasicInfo>
      <ContactInfo
        data={formData.contactInfo}
        handleChange={handleContactInfoChanges}
      ></ContactInfo>
      <EducationInfo
        data={formData.educationInfo}
        handleChange={handleEducationInfoChanges}
      ></EducationInfo>
      <ExperienceInfo
        data={formData.experienceInfo}
        handleChange={handleExperienceInfoChanges}
      ></ExperienceInfo>
    </div>
  );
}
