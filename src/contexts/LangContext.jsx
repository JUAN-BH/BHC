import React, { useContext, useState, createContext } from "react";

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [langSelected, setLangSelected] = useState(navigator.language);
  const langData = { langSelected, setLangSelected };
  return (
    <LangContext.Provider value={langData}>{children}</LangContext.Provider>
  );
};

export function useLangContext() {
  const langData = useContext(LangContext);
  return langData;
}
