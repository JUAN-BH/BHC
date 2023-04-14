import React from "react";
import { useLangContext } from "../contexts/LangContext";
import ENGLISH_CV from "../../public/docs/ENGLISH_CV.pdf";
import SPANISH_CV from "../../public/docs/SPANISH_CV.pdf";

const BtnDownloader = () => {
  const { langSelected } = useLangContext();

  const generatePdf = () => {
    const link = document.createElement("a");
    link.href = langSelected == "es" ? SPANISH_CV : ENGLISH_CV;
    link.download = langSelected == "es" ? "HV_JUAN-BH" : "CV_JUAN-BH";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn--cv" onClick={generatePdf}>
      {langSelected == "es" ? "Descargar HV" : "Download CV"}
    </button>
  );
};

export default BtnDownloader;
