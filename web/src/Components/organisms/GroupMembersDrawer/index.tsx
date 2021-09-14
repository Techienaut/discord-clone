import React from "react";
import styles from "./styles.module.css";

interface Props {
  gridClassName?: string;
}

export const GroupMembersDrawer: React.FC<Props> = ({ gridClassName = "" }) => {
  return (
    <div className={`${styles.GroupMembersDrawer} ${gridClassName}`}>
      <span></span>
    </div>
  );
};
