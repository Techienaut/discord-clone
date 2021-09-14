import React from "react";
import { useRouteMatch } from "react-router-dom";
import styles from "./styles.module.css";

interface Props {}

export const Apt: React.FC<Props> = () => {
  const matched = useRouteMatch("/projects");
  if (matched) {
    return null;
  } else {
    return (
      <div
        className="Apt"
        style={{ height: "200px", backgroundColor: "blue" }}
      ></div>
    );
  }
};
