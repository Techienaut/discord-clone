import React from "react";
import styles from "./styles.module.css";

interface Props {
  gridClassName?: string;
}

export const StartConversationSearch: React.FC<Props> = ({
  gridClassName = "",
}) => {
  return (
    <div className={`${styles.StartConversationSearch} ${gridClassName}`}>
      <span></span>
    </div>
  );
};
