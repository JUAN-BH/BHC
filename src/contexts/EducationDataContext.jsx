import React, { useContext, useState, createContext } from "react";
import { Education } from "../utils/educationClass";
import { langs } from "../utils/langs";
import { useLangContext } from "./LangContext";

const EducationDataContext = createContext();

export const EducationDataContextProvider = ({ children }) => {
  const { langSelected } = useLangContext();
  const UAOTitle =
    langSelected === "es"
      ? langs.es.education.items[0].title
      : langs.en.education.items[0].title;
  const platziTitle =
    langSelected === "es"
      ? langs.es.education.items[1].title
      : langs.en.education.items[1].title;
  const UAODes =
    langSelected === "es"
      ? langs.es.education.items[0].description
      : langs.en.education.items[0].description;
  const platziDes =
    langSelected === "es"
      ? langs.es.education.items[1].description
      : langs.en.education.items[1].description;

  const UAO = new Education({
    name: UAOTitle,
    date: `07/2017 - ${langSelected == "es" ? "presente" : "present"}`,
    description: UAODes,
  });
  const platzi = new Education({
    name: platziTitle,
    date: `08/2021 - ${langSelected == "es" ? "presente" : "present"}`,
    description: platziDes,
  });

  const educationData = [UAO, platzi];

  return (
    <EducationDataContext.Provider value={educationData}>
      {children}
    </EducationDataContext.Provider>
  );
};

export function useEducationDataContext() {
  const educationData = useContext(EducationDataContext);
  return educationData;
}
