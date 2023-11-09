import React from "react";
import {LoginSideGraphicsProps} from "./props";
import classes from "./LoginSideGraphics.module.css";

import {Box, Image} from "@mantine/core";

import spaceManImg from "@assets/images/login/space_man.png";

export const LoginSideGraphics: React.FC<LoginSideGraphicsProps> = (props: LoginSideGraphicsProps) => {

    return (
        <Box className={classes.main_container}>
            <Image className={classes.main_image}
                   src={spaceManImg}
                   fit="contain"
                   w="auto"
            />
        </Box>
    )
};