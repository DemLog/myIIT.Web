import React from "react";
import {ProfileDataBlockProps} from "./props";
import classes from "./ProfileDataBlock.module.css";

import {Box, Text} from "@mantine/core";

export const ProfileDataBlock: React.FC<ProfileDataBlockProps> = (props: ProfileDataBlockProps) => {

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