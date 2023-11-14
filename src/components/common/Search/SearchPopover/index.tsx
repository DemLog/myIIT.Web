import React from "react";
import {SearchPopoverProps} from "./props";
import classes from "./SearchPopover.module.css";

import {Box, Divider} from "@mantine/core";
import {SearchPopoverList} from "@components/Search/SearchPopover/SearchPopoverList";

export const SearchPopover: React.FC<SearchPopoverProps> = (props: SearchPopoverProps) => {
    return (
        <Box className={classes.main_container}>
            <SearchPopoverList title="Пользователи"/>
            <Divider my="xs" w="94%"/>
            <SearchPopoverList title="Новостные каналы"/>
        </Box>
    );
};