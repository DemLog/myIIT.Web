import React, {useEffect} from "react";
import {LoginPageProps} from "./props";
import classes from "./LoginPage.module.css";

import {Box, Image} from "@mantine/core";
import {useDisclosure, useMediaQuery, useDocumentTitle} from "@mantine/hooks";

import {LoginSideGraphics} from "@components/Login/LoginSideGraphics";
import {LoginForm} from "@components/Login";
import {LoginUpdatePasswordBlock} from "@components/Login/LoginUpdatePasswordBlock";
import {LoaderScreen} from "@components/Other/Loader/LoaderScreen";

import myIITLogoImg from "@assets/images/logo/myIIT-logo.png";
export const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps) => {
    const [loaderVisible, { toggle: loaderToggle }] = useDisclosure(true);

    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    useDocumentTitle("Авторизация - myIIT");

    useEffect(() => {
        setTimeout(() => loaderToggle(), 1500);
    }, []);

    return (
        <Box className={classes.main_container}>
            <LoaderScreen visible={loaderVisible} />
            {matchesPC && <LoginSideGraphics/>}
            <Box className={classes.login_container}>
                {matchesMobile && <Box />}
                <Box className={classes.auth_block}>
                    <Image w={matchesPC ? "35%" : matchesMobile ? "70%" : "80%"} src={myIITLogoImg} mb="md"/>
                    <LoginForm/>
                </Box>
                <LoginUpdatePasswordBlock />
            </Box>
        </Box>
    );
};