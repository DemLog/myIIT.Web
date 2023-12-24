import { useEffect } from "react";

import { useStores } from "@core/hooks";

import { useDocumentTitle } from "@mantine/hooks";
import { Box } from "@mantine/core";

import { Messages } from "@components/Messages";

import classes from "./MessagesPage.module.css";

export const MessagesPage = () => {
  const { navigationStore } = useStores();

  useDocumentTitle("Сообщения - myIIT");
  useEffect(() => {
    navigationStore.setNamePage("Сообщения");
  }, [navigationStore]);

  return (
    <Box className={classes.messages_page}>
      <Messages />
    </Box>
  );
};
