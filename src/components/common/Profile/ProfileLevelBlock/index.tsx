import React from "react";
import {ProfileLevelBlockProps} from "./props";
import classes from "./ProfileLevelBlock.module.css";

import {Box, Text} from "@mantine/core";

export const ProfileLevelBlock: React.FC<ProfileLevelBlockProps> = (props: ProfileLevelBlockProps) => {

    return (
        <Box className={classes.main_container} px="lg">
            <Box className={classes.header} pt="xs">
                <Text c="#222222" fw={500} size="md">Личные данные</Text>
            </Box>
            <Box className={classes.content} pt="xs">
                прпрпарпрпр
            </Box>
        </Box>
    )
};