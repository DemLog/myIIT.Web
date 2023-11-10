import React from "react";
import {HeaderAppProps} from "./props";
import classes from "./HeaderApp.module.css";

import {ActionIcon, Box, Container, Group, Image} from "@mantine/core";

import myIITLogoImg from "@assets/images/logo/myIIT-logo-with-background.png";
import bookmarkFillIcon from "@assets/images/icons/bookmark_fill.png";

import {SearchField} from "@components/Search/SearchField";
import {NotificationButton} from "@components/Notification/NotificationButton";
import {ProfilePopover} from "@components/Other/ProfilePopover";

export const HeaderApp: React.FC<HeaderAppProps> = (props: HeaderAppProps) => {
    return (
        <Box className={classes.header_main}>
            <Container className={classes.header_container} fluid mx="xl">
                <Box className={classes.header_logo_block}>
                    <Image src={myIITLogoImg} h={46} w="auto"
                           fit="contain"/>
                </Box>
                <Box className={classes.header_content}>
                    <SearchField/>
                    <Box className={classes.header_content_right_block}>
                        <Group gap="xs" mr="lg">
                            <NotificationButton/>
                            <ActionIcon color="#F6F6F6" size="lg" radius="sm">
                                <Image w="auto" h={28} fit="contain" src={bookmarkFillIcon}/>
                            </ActionIcon>
                        </Group>
                        <ProfilePopover/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};