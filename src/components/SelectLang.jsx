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
        value={langSelected}
        name=""
        id=""
        onChange={changeLang}
        className="btn selectLang"
      >
        <option value="en">
          {langSelected === "es" ? "Ingles" : "English"}
        </option>
        <option value="es">
          {langSelected === "es" ? "Español" : "Spanish"}
        </option>
      </select>
    </>
  );
};
