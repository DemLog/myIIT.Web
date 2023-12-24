import { Box, Text, Image } from "@mantine/core";
import { CategoryItemProps } from "./CategoryItem.types";

import classes from "./CategoryItem.module.css";

export const CategoryItem = ({
  title,
  lastMessage,
  imgURL,
}: CategoryItemProps) => (
  <Box className={classes.category_item}>
    <Image className={classes.avatar} src={imgURL} />
    <Box>
      <Text>{title}</Text>
      <Text>{lastMessage}</Text>
    </Box>
  </Box>
);
