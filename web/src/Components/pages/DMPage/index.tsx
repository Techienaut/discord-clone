import React from "react";
import styles from "./styles.module.css";
import contentGrid from "../../sharedStyles/contentGrid.module.css";
import { StartConversationSearch } from "../../organisms/StartConversationSearch";
import { DMDrawer } from "../../organisms/DMDrawer";
import { ChatToolbar } from "../../organisms/ChatToolbar/index";
import { ChatSection } from "../../organisms/ChatSection";
import { GroupMembersDrawer } from "../../organisms/GroupMembersDrawer";

interface Props {
  gridClassName?: string;
}

export const DMPage: React.FC<Props> = ({ gridClassName = "" }) => {
  return (
    <div
      className={`${styles.DMPage} ${contentGrid.contentGrid} ${gridClassName}`}
    >
      <StartConversationSearch gridClassName={contentGrid.upperLeftBoxArea} />
      <ChatToolbar gridClassName={contentGrid.titleBar} />
      <DMDrawer gridClassName={contentGrid.leftDrawer} />
      <ChatSection gridClassName={contentGrid.chatArea} />
      <GroupMembersDrawer gridClassName={contentGrid.rightDrawer} />
    </div>
  );
};
