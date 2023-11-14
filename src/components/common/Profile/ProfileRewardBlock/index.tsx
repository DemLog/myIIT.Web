import React from "react";
import {ProfileRewardBlockProps} from "./props";
import classes from "./ProfileRewardBlock.module.css";

import {Box, Text} from "@mantine/core";

export const ProfileRewardBlock: React.FC<ProfileRewardBlockProps> = (props: ProfileRewardBlockProps) => {

    return (
        <Box className={classes.main_container} px="lg">
            <Box className={classes.header} pt="xs">
                <Text c="#222222" fw={500} size="xl">Личные данные</Text>
            </Box>
            <Box className={classes.content} pt="xs">
                прпрпарпрпр
            </Box>
        </Box>
    )
};