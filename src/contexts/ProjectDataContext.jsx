import React, { useContext, createContext } from "react";
import { Project } from "../utils/projectsClass";
//*Skills
import htmlImg from "../assets/imgSkills/html.svg";
import cssImg from "../assets/imgSkills/css.svg";
import jsImg from "../assets/imgSkills/js.svg";
import reactImg from "../assets/imgSkills/react.svg";
import sassImg from "../assets/imgSkills/sass.svg";
import viteImg from "../assets/imgSkills/vite.svg";
import webpackImg from "../assets/imgSkills/webpack.svg";
import tsImg from "../assets/imgSkills/ts.svg";
import tailwindImg from "../assets/imgSkills/tailwind.png";
//*projetcs
import catAPIImg from "../assets/imgProjects/catAPINew.png";
import SHOPPIImg from "../assets/imgProjects/shoppi.png";
import weatherBHCImg from "../assets/imgProjects/weatherBHC.png";
import todDoImg from "../assets/imgProjects/toDoMachine.png";
import pokedexImg from "../assets/imgProjects/pokedex.png";
import moviesDBImg from "../assets/imgProjects/nMoviesDBpng.png";
import { useLangContext } from "./LangContext";
import { langs } from "../utils/langs";

const ProjectDataContext = createContext();

export const ProjectDataContextProvider = ({ children }) => {
  const { langSelected } = useLangContext();

  const catAPIDes =
    langSelected === "es"
      ? langs.es.projects.items[0].description
      : langs.en.projects.items[0].description;
  const SHOPPIDes =
    langSelected === "es"
      ? langs.es.projects.items[1].description
      : langs.en.projects.items[1].description;
  const weatherDes =
    langSelected === "es"
      ? langs.es.projects.items[2].description
      : langs.en.projects.items[2].description;
  const toDoDes =
    langSelected === "es"
      ? langs.es.projects.items[3].description
      : langs.en.projects.items[3].description;
  const pokeDes =
    langSelected === "es"
      ? langs.es.projects.items[4].description
      : langs.en.projects.items[4].description;
  const moviesDes =
    langSelected === "es"
      ? langs.es.projects.items[5].description
      : langs.en.projects.items[5].description;

  const catAPI = new Project({
    name: "Cat API",
    imgProject: catAPIImg,
    description: catAPIDes,
    skills: [reactImg, viteImg, tsImg, tailwindImg],
    links: {
      deploy: "https://catsbhc.netlify.app/",
      repository: "https://github.com/JUAN-BH/newCatAPI",
    },
  });
  const SHOPPI = new Project({
    name: "SHOPPI",
    imgProject: SHOPPIImg,
    description: SHOPPIDes,
    skills: [reactImg, viteImg, tsImg, tailwindImg],
    links: {
      deploy: "https://shoppi-bh.netlify.app/",
      repository: "https://github.com/JUAN-BH/simpleEcommerce",
    },
  });
  const weatherBHC = new Project({
    name: "WeatherBHC",
    imgProject: weatherBHCImg,
    description: weatherDes,
    skills: [htmlImg, cssImg, jsImg, webpackImg],
    links: {
      deploy: "https://weather-bhc-d7e2cb.netlify.app/",
      repository: "https://github.com/JUAN-BH/weatherProject",
    },
  });
  const toDoMachine = new Project({
    name: "To Do Machine",
    imgProject: todDoImg,
    description: toDoDes,
    skills: [htmlImg, sassImg, reactImg],
    links: {
      deploy: "https://juan-bh.github.io/ToDoMachine/",
      repository: "https://github.com/JUAN-BH/ToDoMachine",
    },
  });
  const pokedex = new Project({
    name: "Pokedex",
    imgProject: pokedexImg,
    description: pokeDes,
    skills: [htmlImg, sassImg, reactImg],
    links: {
      deploy: "https://juan-bh.github.io/pokedex/",
      repository: "https://github.com/JUAN-BH/pokedex",
    },
  });
  const movies = new Project({
    name: "Movies DB",
    imgProject: moviesDBImg,
    description: moviesDes,
    skills: [htmlImg, sassImg, reactImg, viteImg],
    links: {
      deploy: "https://n-moviesdb-bhc.netlify.app/",
      repository: "https://github.com/JUAN-BH/newMoviesDB",
    },
  });

  const projectsData = [
    catAPI,
    SHOPPI,
    weatherBHC,
    toDoMachine,
    pokedex,
    movies,
  ];

  return (
    <ProjectDataContext.Provider value={projectsData}>
      {children}
    </ProjectDataContext.Provider>
  );
};

export function useProjectDataContext() {
  const projectsData = useContext(ProjectDataContext);
  return projectsData;
}
