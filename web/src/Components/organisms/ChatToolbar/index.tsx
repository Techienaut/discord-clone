import React from "react";
import styles from "./styles.module.css";

interface Props {
  gridClassName?: string;
}

export const ChatToolbar: React.FC<Props> = ({ gridClassName = "" }) => {
  return (
    <div className={`${styles.ChatToolbar} ${gridClassName}`}>
      <span></span>
    </div>
  );
};
