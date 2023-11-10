import React from "react";
import {SearchFieldProps} from "./props";
import classes from "./SearchField.module.css";

import {Box, Image, TextInput} from "@mantine/core";

import searchFillIcon from "@assets/images/icons/search_fill.png";

export const SearchField: React.FC<SearchFieldProps> = (props: SearchFieldProps) => {
    return (
        <Box className={classes.search_block}>
            <TextInput variant="filled"
                       radius="lg"
                       w="100%"
                       placeholder="Поиск"
                       leftSectionPointerEvents="none"
                       leftSection={<Image w="auto" h="lg" fit="contain" src={searchFillIcon}/>}
            />
        </Box>
    );
};