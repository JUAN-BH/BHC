import React, { useEffect, useRef } from "react";
import { InfoAboutMe } from "../components/InfoAboutMe";
import { Photo } from "../components/Photo";

export const AboutMe = () => {
  return (
    <section className="aboutMe">
      <Photo />
      <InfoAboutMe />
    </section>
  );
};
