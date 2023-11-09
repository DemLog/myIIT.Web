import React from "react";
import {LoginFormAuthIITBlockProps} from "./props";
import classes from "./LoginFormAuthIITBlock.module.css";

import {Box, Image, Text} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import iitBlackIcon from "@assets/images/icons/black-iit.png";

export const LoginFormAuthIITBlock: React.FC<LoginFormAuthIITBlockProps> = (props: LoginFormAuthIITBlockProps) => {

    return (
        <Box className={classes.form_iit_moodle_block} mt="sm">
            <Image h={24}
                   w="auto"
                   fit="contain" src={iitBlackIcon}/>
            <Text fw={200} fs="italic" size="sm" ml={2}>Вход происходит через ИИТ Moodle</Text>
        </Box>
    )
};