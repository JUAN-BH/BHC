import React from "react";
import { Io } from "../containers/Io";
import photo from "../assets/photo.jpg";

export const Photo = () => {
  return (
    <Io animation="animate__animated animate__fadeIn">
      <article className="aboutMe__photoContainer">
        <div className="aboutMe__photoContainer__photo">
          <img src={photo} alt="me" />
        </div>
      </article>
    </Io>
  );
};
