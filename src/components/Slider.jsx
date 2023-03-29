import React from "react";
import { Io } from "../containers/Io";

export const Slider = ({ items }) => {
  return (
    <article className="skills__slider">
      {items.map((img) => (
        <Io animation="animate__animated animate__bounceIn" key={img}>
          <img src={img} alt="" />
        </Io>
      ))}
    </article>
  );
};
