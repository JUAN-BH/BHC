import React from "react";
import { ProjectItem } from "../components/ProjectItem";
import { useLangContext } from "../contexts/LangContext";
import { useProjectDataContext } from "../contexts/ProjectDataContext";
import { langs } from "../utils/langs";

export const Projects = () => {
  const projectsData = useProjectDataContext();
  const { langSelected } = useLangContext();

  const title =
    langSelected === "es" ? langs.es.projects.title : langs.en.projects.title;

  return (
    <section className="projects" id="projects">
      <h2>{title}</h2>
      <article className="projects__items">
        {projectsData.map((project) => (
          <ProjectItem project={project} key={project.name} />
        ))}
      </article>
    </section>
  );
};
