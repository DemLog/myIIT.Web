import React, {useState} from "react";
import {LoginSideGraphicsProps} from "@components/Login/LoginSideGraphics/props";
import classes from "./LoginSideGraphics.module.css";

import Spline from '@splinetool/react-spline';
import phoneStatic from "@assets/images/login/phone.png";

import {Box, Image} from "@mantine/core";

export const LoginSideGraphics: React.FC<LoginSideGraphicsProps> = (props: LoginSideGraphicsProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleSplineLoad = () => {
        setIsLoaded(true);
    };

    return (
        <Box className={classes.main_container} >
            {!isLoaded && <Image h="50%" w="auto" fit="contain" src={phoneStatic}/>}
            <Spline
                scene="https://prod.spline.design/AroZ2lkoXHyyD6rb/scene.splinecode"
                onLoad={handleSplineLoad}
            />
        </Box>
    )
};