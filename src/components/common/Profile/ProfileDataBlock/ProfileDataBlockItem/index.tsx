import React from "react";
import {ProfileDataBlockItemProps} from "./props";
import classes from "./ProfileDataBlockItem.module.css";

import {Box, Text} from "@mantine/core";

export const ProfileDataBlockItem: React.FC<ProfileDataBlockItemProps> = (props: ProfileDataBlockItemProps) => {

    return (
        <Box className={classes.main_container}>
            <Box className={classes.header}>
                <Text c="#9C9C9C">{props.title}</Text>
            </Box>
            <Box className={classes.content} mt={-8} pl="xs">
                <Text fw={500} size="lg">{props.value}</Text>
            </Box>
        </Box>
    )
};