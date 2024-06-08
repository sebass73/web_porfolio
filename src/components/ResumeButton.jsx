import React from "react";

const ResumeButton = () => {
  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = "../../public/CV_SM_ES_2024.pdf";
    link.download = "CV_SM_ES_2024.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn btn-secondary" onClick={handleResumeClick}>
      Resume
    </button>
  );
};

export default ResumeButton;
