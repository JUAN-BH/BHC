import React from "react";
import { Io } from "../containers/Io";

export const Slider = ({ items }) => {
  return (
    <article className="skills__slider">
      {items.map((item) => (
        <Io animation="animate__animated animate__bounceIn" key={item.name}>
          <div>
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
          </div>
        </Io>
      ))}
    </article>
  );
};
