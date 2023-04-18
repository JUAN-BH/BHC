import React, { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { SelectLang } from "./SelectLang";
import { useLangContext } from "../contexts/LangContext";
import { langs } from "../utils/langs";
import { Link } from "react-scroll";
import { Io } from "../containers/Io";

export const MenuRes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { langSelected } = useLangContext();
  const edu = langSelected === "es" ? langs.es.menu.edu : langs.en.menu.edu;
  const ski = langSelected === "es" ? langs.es.menu.ski : langs.en.menu.ski;
  const pro = langSelected === "es" ? langs.es.menu.pro : langs.en.menu.pro;

  function handleSetActive() {
    setIsOpen(false);
  }

  return (
    <Io animation="animate__animated animate__fadeInDown">
      <article className={`${isOpen ? "menuOpen" : "menuRes"}`}>
        <div className={`${isOpen ? "menuOpen__icon" : "menuRes__icon"}`}>
          <Hamburger size={25} toggled={isOpen} toggle={setIsOpen} />
        </div>
        <div className={`${isOpen ? "menuResBtns" : "hide"}`}>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <button className="btn">{edu}</button>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <button className="btn">{ski}</button>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <button className="btn">{pro}</button>
          </Link>
          <SelectLang setIsOpen={setIsOpen} />
        </div>
      </article>
    </Io>
  );
};
