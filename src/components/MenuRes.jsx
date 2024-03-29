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
            <button className="btn textMenu">{edu}</button>
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <button className="btn textMenu">{exp}</button>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            <button className="btn textMenu">{pro}</button>
          </Link>
          <SelectLang setIsOpen={setIsOpen} />
        </div>
      </article>
    </Io>
  );
};
