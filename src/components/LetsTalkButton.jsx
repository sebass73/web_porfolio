import React from "react";
import { useTranslation } from "react-i18next";

const LetsTalkButton = () => {
  const handleHablemosClick = () => {
    window.location.href = "#contact";
  };

  const { t } = useTranslation();

  return (
    <button className="btn btn-primary me-2" onClick={handleHablemosClick}>
      {t('Lets talk button')}
    </button>
  );
};

export default LetsTalkButton;
