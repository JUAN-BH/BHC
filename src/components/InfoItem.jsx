import React from "react";
import { Io } from "../containers/Io";

export const InfoItem = ({ education }) => {
  const { name, date, description, projects } = education
  // console.log(projects);
  if (!education) {
    // Manejar el caso donde education es null o undefined
    return null;
  }
  
  return (
    <article className="education__educationItem">
      <Io animation="animate__animated animate__fadeInUp">
        <h3>{education.name}</h3>
        <p className="education__educationItem__date">{education.date}</p>
        <p>{education.description} </p>
        { projects.length > 0 ?
          <div className="education__educationItem__projects">
            <h4>Projects</h4>
            <div className="education__educationItem__projects__container">
              {projects.map((project) => (
                <a className="education__educationItem__projects__container__project" href={project.link}>
                  <img src={project.image} alt="" />
                  <p>{project.name}</p>
                </a>
              ))}   
            </div>
          </div>
          :
          null
        }
      </Io>
    </article>
  );
};
