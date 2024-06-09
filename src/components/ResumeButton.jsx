import React from "react";
import { useTranslation } from "react-i18next";

const ResumeButton = () => {
  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = "../../public/CV_SM_ES_2024.pdf";
    link.download = "CV_SM_ES_2024.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { t } = useTranslation();

  return (
    <button className="btn btn-secondary" onClick={handleResumeClick}>
      {t('Resume button')}
    </button>
  );
};

export default ResumeButton;
