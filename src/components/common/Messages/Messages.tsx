import { useState } from "react";

import { Box } from "@mantine/core";

import { Category } from "./Category";
import { ChatRoom } from "./ChatRoom";

import classes from "./Messages.module.css";
import { CategoryList } from "./Messages.constants";

export const Messages = () => {
  const [activeTab, setActiveTab] = useState<CategoryList>(
    CategoryList.Dialogs
  );
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <Box className={classes.messages}>
      <Category activeTab={activeTab} handleChangeCategory={setActiveTab} />
      <ChatRoom />
    </Box>
  );
};
