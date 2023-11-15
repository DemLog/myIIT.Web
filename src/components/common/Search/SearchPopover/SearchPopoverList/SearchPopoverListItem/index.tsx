import React from "react";
import {SearchPopoverListItemProps} from "./props";
import classes from "./SearchPopoverListItem.module.css";

import {Avatar, Box} from "@mantine/core";

export const SearchPopoverListItem: React.FC<SearchPopoverListItemProps> = (props: SearchPopoverListItemProps) => {
    return (
        <Box className={classes.main__container} mt="xs">
            <Box className={classes.content}>
                <Box className={classes.avatar_block}>
                    <Avatar variant="filled" radius="xl" color="red" src={props.avatar} size="43px"/>
                </Box>
                <Box className={classes.data_block} ml="xs">
                    {props.children}
                </Box>
            </Box>
            <Box className={classes.action_block}>
                {props.actionButton}
            </Box>

        </Box>
    );
};