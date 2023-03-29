import React from "react";
import { Io } from "../containers/Io";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";
export const ProjectItem = ({ project }) => {
  const { langSelected } = useLangContext();

  const btnWeb =
    langSelected === "es"
      ? langs.es.projects.btns.deploy
      : langs.en.projects.btns.deploy;
  const btnRepo =
    langSelected === "es"
      ? langs.es.projects.btns.repository
      : langs.en.projects.btns.repository;

  return (
    <article className="projects__item">
      <div className="projects__item__info">
        <p>{project.description}</p>
        <div className="projects__item__info__skills">
          {project.skills.map((skill) => (
            <img src={skill} alt={skill} key={skill} className="imgSkill" />
          ))}
        </div>
        <div>
          <button
            className="btnProject btn"
            onClick={() => {
              window.open(`${project.links.deploy}`, "_blank");
            }}
          >
            {btnWeb}
          </button>
          <button
            className="btnProject btn"
            onClick={() => {
              window.open(`${project.links.repository}`, "_blank");
            }}
          >
            {btnRepo}
          </button>
        </div>
      </div>
      <Io animation="animate__animated animate__fadeInUp">
        <img src={project.imgProject} alt={project.name} />
        <h3>{project.name}</h3>
      </Io>
    </article>
  );
};
