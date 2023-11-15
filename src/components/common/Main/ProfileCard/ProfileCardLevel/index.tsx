import React from "react";
import {ProfileCardLevelProps} from "./props";
import classes from "./ProfileCardLevel.module.css";

import {Box, Text} from "@mantine/core";


export const ProfileCardLevel: React.FC<ProfileCardLevelProps> = (props: ProfileCardLevelProps) => {
    const value: string = `${props.progress}%`;

    return (
        <Box className={classes.main_container}>
            <Box className={classes.progress} w={value} />
            <Box className={classes.level_box}>
                <Box className={classes.level_block} ml={4}>
                    <Text fw={600} c="white">{props.level}</Text>
                </Box>
                <Box className={classes.level_block} mr={4}>
                    <Text fw={600} c="white">{props.level + 1}</Text>
                </Box>
            </Box>
        </Box>
    )
};