import React from "react";
import { InfoItem } from "../components/InfoItem";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";

export const Experience = () => {
  const { langSelected } = useLangContext();

  const ZTOTitle = langSelected.includes("es")
  ? langs.es.experience.items[0].title
  : langs.en.experience.items[0].title;
  const ZTODescription = langSelected.includes("es")
  ? langs.es.experience.items[0].description
  : langs.en.experience.items[0].description;

  const expData = [
    {
      name: ZTOTitle,
      date: `07/2023 - ${langSelected.includes("es") ? "presente" : "present"}`,
      description: ZTODescription,
      projects: [
        {
          name: "MyWay HAIR DNA",
          link: "https://mywayhairdna.com/",
          image: "/src/assets/imgProjects/MyWayHairDna.png",
        },
        {
          name: "ReduSculpt",
          link: "https://redusculpt.com/pages/home",
          image: "/src/assets/imgProjects/reduSculpt.png",
        }
      ],
    },
  ];

  const title = langSelected.includes("es")
    ? langs.es.experience.title
    : langs.en.experience.title;

  return (
    <section className="education" id="experience">
      <h2>{title}</h2>
      {expData.map((e) => (
        <InfoItem education={e} key={e.name} />
      ))}
    </section>
  );
};
