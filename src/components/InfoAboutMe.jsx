import React from "react";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";
import { Io } from "../containers/Io";
import BtnDownloader from "./BtnDownloader";
import { SocialMedia } from "../containers/SocialMedia";

export const InfoAboutMe = () => {
  const { langSelected } = useLangContext();

  const text = langSelected === "es" ? langs.es.aboutMe : langs.en.aboutMe;
  return (
    <article className="aboutMe__info">
      <Io animation="animate__animated animate__fadeIn">
        <h1>Juan Manuel Becerra</h1>
        <h2>Front-end dev</h2>
        <div className="aboutMe__info__social">
          <SocialMedia/>
          <BtnDownloader />
        </div>
        <p>{text}</p>
      </Io>
    </article>
  );
};
