import React from "react";
import { Slider } from "../components/Slider";
// import htmlImg from "../assets/imgSkills/html.svg";
// import cssImg from "../assets/imgSkills/css.svg";
// import jsImg from "../assets/imgSkills/js.svg";
// import reactImg from "../assets/imgSkills/reactIcon.png";
// import sassImg from "../assets/imgSkills/sass.svg";
// import viteImg from "../assets/imgSkills/vite.svg";
// import webpackImg from "../assets/imgSkills/webpack.svg";
// import reduxImg from "../assets/imgSkills/redux.png";
// import formikImg from "../assets/imgSkills/formik.png";
import skills from "../utils/skills";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";

export const Skills = () => {
  const { langSelected } = useLangContext();

  const title =
    langSelected === "es" ? langs.es.skills.title : langs.en.skills.title;
  const subTitle =
    langSelected === "es" ? langs.es.skills.subTitle : langs.en.skills.subTitle;

  return (
    <section className="skills" id="skills">
      <h2>{title}</h2>
      <Slider items={skills.learned} />
      <h3>{subTitle}...</h3>
      <Slider items={skills.learnig} />
    </section>
  );
};
