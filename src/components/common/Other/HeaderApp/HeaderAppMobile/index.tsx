import React from "react";
import {HeaderAppMobileProps} from "./props";
import classes from "./HeaderAppMobile.module.css";

import {Box, Container, Image, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import myIITLogoImg from "@assets/images/logo/myIIT-logo-mobile.png";
import {NotificationButton} from "@components/Notification/NotificationButton";

export const HeaderAppMobile: React.FC<HeaderAppMobileProps> = (props: HeaderAppMobileProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    return (
        <Box className={classes.header_main}>
            <Container className={classes.header_container}>
                <Box className={classes.header_logo_block}>
                    <Image src={myIITLogoImg} h={36} w="auto"
                           fit="contain"/>
                </Box>
                <Box className={classes.header_content} ml="xs">
                    <Box className={classes.header_title_block}>
                        <Title fw={500} c="#6D6D6D" size={28}>Главное окно</Title>
                    </Box>
                    <Box className={classes.header_buttons_block}>
                        <NotificationButton radius="xl"/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};