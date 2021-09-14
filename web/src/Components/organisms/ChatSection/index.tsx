import React from "react";
import styles from "./styles.module.css";

interface Props {
  gridClassName?: string;
}

export const ChatSection: React.FC<Props> = ({ gridClassName = "" }) => {
  return (
    <div className={`${styles.ChatSection} ${gridClassName}`}>
      <span></span>
    </div>
  );
};
