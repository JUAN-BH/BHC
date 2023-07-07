import React from "react";
import { EducationItem } from "../components/EducationItem";
import { useEducationDataContext } from "../contexts/EducationDataContext";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";

export const Education = () => {
  const educationData = useEducationDataContext();
  const { langSelected } = useLangContext();

  const title = langSelected.includes("es")
    ? langs.es.education.title
    : langs.en.education.title;
  return (
    <section className="education" id="education">
      <h2>{title}</h2>
      {educationData.map((e) => (
        <EducationItem education={e} key={e.name} />
      ))}
    </section>
  );
};
