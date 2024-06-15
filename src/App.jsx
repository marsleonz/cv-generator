import { useState } from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";

function App() {
  const [formData, setFormData] = useState({
    basicInfo: {
      firstName: "",
      lastName: "",
      occupation: "",
      summary: "",
    },
    contactInfo: {
      email: "",
      phoneNumber: "",
      location: "",
      website: "",
    },
    educationInfo: {
      university: "",
      course: "",
      startingDate: "",
      endingDate: "",
      gpa: "",
    },
    experienceInfo: {
      position: "",
      company: "",
      startingYear: "",
      endingYear: "",
      jobResponsibility: "",
    },
  });

  const handleBasicInfoChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      basicInfo: {
        ...prevFormData.basicInfo,
        [name]: value,
      },
    }));
  };
  const handleContactInfoChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      contactInfo: {
        ...prevFormData.contactInfo,
        [name]: value,
      },
    }));
  };
  const handleEducationInfoChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      educationInfo: {
        ...prevFormData.educationInfo,
        [name]: value,
      },
    }));
  };
  const handleExperienceInfoChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      experienceInfo: {
        ...prevFormData.experienceInfo,
        [name]: value,
      },
    }));
  };
  const printPreview = () => {
    window.print();
  };
  return (
    <>
      <div className="App">
        <Editor
          formData={formData}
          handleBasicInfoChanges={handleBasicInfoChanges}
          handleContactInfoChanges={handleContactInfoChanges}
          handleEducationInfoChanges={handleEducationInfoChanges}
          handleExperienceInfoChanges={handleExperienceInfoChanges}
        ></Editor>
        <Preview formData={formData}></Preview>
        <div className="btn-container__preview">
          <button
            type="button"
            className="btn__print-preview material-symbols-outlined"
            onClick={printPreview}
          >
            print
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
