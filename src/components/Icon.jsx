import React from "react";

export const Icon = ({ to, children }) => {
  return (
    <a href={to} target="_blank">
      {children}
    </a>
  );
};
