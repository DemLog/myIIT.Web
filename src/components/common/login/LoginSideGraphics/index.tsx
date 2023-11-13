import React from "react";
import {LoginSideGraphicsProps} from "@components/login/LoginSideGraphics/props";
import classes from "./LoginSideGraphics.module.css";
import Spline from '@splinetool/react-spline';

import {Box} from "@mantine/core";

export const LoginSideGraphics: React.FC<LoginSideGraphicsProps> = (props: LoginSideGraphicsProps) => {

    return (
        <Box className={classes.main_container} >
            <Spline scene="https://prod.spline.design/AroZ2lkoXHyyD6rb/scene.splinecode" />
        </Box>
    )
};