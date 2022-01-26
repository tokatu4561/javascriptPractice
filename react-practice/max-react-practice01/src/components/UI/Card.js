import React from "react";

import classes from "./Card.module.css";

export const Card = (props) => {
  return (
    <div className={`${props.className} ${classes.card}`}>{props.children}</div>
  );
};
