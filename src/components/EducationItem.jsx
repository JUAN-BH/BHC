import React from "react";
import { Io } from "../containers/Io";

export const EducationItem = ({ education }) => {
  return (
    <article className="education__educationItem">
      <Io animation="animate__animated animate__fadeInUp">
        <h3>{education.name}</h3>
        <p className="education__educationItem__date">{education.date}</p>
        <p>{education.description} </p>
      </Io>
    </article>
  );
};
