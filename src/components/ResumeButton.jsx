import React from "react";
import { useTranslation } from "react-i18next";

const ResumeButton = () => {
  const handleResumeClick = () => {
    const link = document.createElement("a");
    if (i18n.language === "en"){
      link.href = "/CV_SM_EN_2024.pdf";
      link.download = "CV_SM_EN_2024.pdf";
    } else {
      link.href = "/CV_SM_ES_2024.pdf";
      link.download = "CV_SM_ES_2024.pdf";
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { t, i18n } = useTranslation();

  return (
    <button className="btn btn-secondary hover-effect" onClick={handleResumeClick}>
      {t('Resume button')}
    </button>
  );
};

export default ResumeButton;
