import React from "react";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";

export const Footer = () => {
  const { langSelected } = useLangContext();

  const upt = langSelected === "es" ? langs.es.lastUpt : langs.en.lastUpt;

  return (
    <footer>
      <article>
        <p>{upt}: 07/07/2023</p>
      </article>
    </footer>
  );
};
