import { useState } from "react";

import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Block } from "@components/UI";
import { CarouselTabs } from "@components/UI/CarouselTabs";
import { CategoryItem } from "@components/UI/CategoryItem";

import { CategoryList } from "../Messages.constants";

import classes from "./Category.module.css";
import { CategoryTabs, CategoryTitles } from "./Category.data";

import { CategoryMocks } from "./Category.mocks";
import { CategoryProps } from "./Category.types";

export const Category = ({activeTab, handleChangeCategory}: CategoryProps) => {

  const matchesMobile = useMediaQuery("(max-width: 579px)");

  return (
    <Box className={classes.category}>
      <Block title={CategoryTitles[activeTab]}>
        <Box className={classes.content}>
          <Box className={classes.header}>
            <CarouselTabs
              tabs={CategoryTabs}
              activeTab={activeTab}
              onTabChange={(value: string) =>
                handleChangeCategory(value as CategoryList)
              }
              fullWidth={!matchesMobile}
            />
          </Box>
          <Box className={classes.body}>
            {CategoryMocks.map((item) => (
              <CategoryItem key={item.id} {...item} />
            ))}
          </Box>
        </Box>
      </Block>
    </Box>
  );
};
