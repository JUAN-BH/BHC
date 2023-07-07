import React from "react";
import { useLangContext } from "../contexts/LangContext";

export const SelectLang = ({ setIsOpen }) => {
  const { langSelected, setLangSelected } = useLangContext();

  function changeLang(e) {
    setLangSelected(e.target.value);
    setIsOpen(false);
  }
  return (
    <>
      <select
        value={langSelected.includes("es") ? "es" : "en"}
        name=""
        id=""
        onChange={changeLang}
        className="btn selectLang textMenu"
      >
        <option className="textMenu" value="en">
          {langSelected === "es" ? "Ingles" : "English"}
        </option>
        <option className="textMenu" value="es">
          {langSelected === "es" ? "Español" : "Spanish"}
        </option>
      </select>
    </>
  );
};
