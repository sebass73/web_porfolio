import React from "react";

const LetsTalkButton = () => {
  const handleHablemosClick = () => {
    window.location.href = "#contact";
  };
  return (
    <button className="btn btn-primary me-2" onClick={handleHablemosClick}>
      Let's talk
    </button>
  );
};

export default LetsTalkButton;
