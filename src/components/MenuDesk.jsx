import React from "react";
import { Link } from "react-scroll";
import { Io } from "../containers/Io";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";
import { SelectLang } from "./SelectLang";

export const MenuDesk = () => {
  const { langSelected } = useLangContext();
  const edu = langSelected.includes("es")
    ? langs.es.menu.edu
    : langs.en.menu.edu;
  // const ski = langSelected.includes("es")
  //   ? langs.es.menu.ski
  //   : langs.en.menu.ski;
  const exp = langSelected.includes("es")
    ? langs.es.menu.exp
    : langs.en.menu.exp;
  const pro = langSelected.includes("es")
    ? langs.es.menu.pro
    : langs.en.menu.pro;

  return (
    <header>
      <Io animation="animate__animated animate__fadeInDown">
        <article className="menuDesk">
          <nav className="menuDesk__nav">
            <Link to="education" spy={true} smooth={true} duration={500}>
              <button className="menuDesk--btn btn">
                <p className="textMenu">{edu}</p>
              </button>
            </Link>
            <Link to="experience" spy={true} smooth={true} duration={500}>
              <button className="menuDesk--btn btn">
                <p className="textMenu">{exp}</p>
              </button>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <button className="menuDesk--btn btn">
                <p className="textMenu">{pro}</p>
              </button>
            </Link>
          </nav>

          <SelectLang />
        </article>
      </Io>
    </header>
  );
};
