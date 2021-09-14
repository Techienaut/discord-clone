import React from "react";
import styles from "./styles.module.css";

interface Props {
  gridClassName?: string;
}

export const GuildNavbar: React.FC<Props> = ({ gridClassName = "" }) => {
  return (
    <div className={`${styles.guildNavbar} ${gridClassName}`}>
      <span></span>
    </div>
  );
};
