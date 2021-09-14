import React from "react";
import styles from "./styles.module.css";

interface Props {
  gridClassName?: string;
}

export const DMDrawer: React.FC<Props> = ({ gridClassName = "" }) => {
  return (
    <div className={`${styles.DMDrawer} ${gridClassName}`}>
      <span></span>
    </div>
  );
};
