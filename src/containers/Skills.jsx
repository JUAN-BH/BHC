import React from "react";
import { Slider } from "../components/Slider";
import htmlImg from "../assets/imgSkills/html.svg";
import cssImg from "../assets/imgSkills/css.svg";
import jsImg from "../assets/imgSkills/js.svg";
import reactImg from "../assets/imgSkills/react.svg";
import sassImg from "../assets/imgSkills/sass.svg";
import viteImg from "../assets/imgSkills/vite.svg";
import webpackImg from "../assets/imgSkills/webpack.svg";
import tsImg from "../assets/imgSkills/ts.svg";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";

export const Skills = () => {
  const { langSelected } = useLangContext();

  const title =
    langSelected === "es" ? langs.es.skills.title : langs.en.skills.title;
  const subTitle =
    langSelected === "es" ? langs.es.skills.subTitle : langs.en.skills.subTitle;

  const skills = [
    htmlImg,
    cssImg,
    jsImg,
    webpackImg,
    sassImg,
    reactImg,
    viteImg,
  ];
  const learning = [tsImg];

  return (
    <section className="skills" id="skills">
      <h2>{title}</h2>
      <Slider items={skills} />
      <h3>{subTitle}...</h3>
      <Slider items={learning} />
    </section>
  );
};
