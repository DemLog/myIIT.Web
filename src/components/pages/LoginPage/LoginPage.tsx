import React from "react";
import { LoginPageProps } from "./LoginPage.types";
import classes from "./LoginPage.module.css";

import { Box, Image, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import myIITLogo from "@assets/images/logo/myIIT-logo.png";

import { Container } from "@components/UI";
import { LoginForm, LoginLeftBlock } from "@components/Login";

export const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)')

    return (
        <Box className={classes.main}>
            <Container>
                <Box className={classes.content} mt="-2%">
                    {matchesPC && <LoginLeftBlock />}
                    <Box className={classes.login_block} mx="lg">
                        <Stack className={classes.login_form} gap="xs">
                            <Image className={classes.login_logo} src={myIITLogo} h="auto" fit="contain" />
                            <LoginForm />
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};