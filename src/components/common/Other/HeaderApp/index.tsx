import React from "react";
import {HeaderAppProps} from "./props";
import classes from "./HeaderApp.module.css";

import {ActionIcon, Box, Container, Group, Image} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import myIITLogoImg from "@assets/images/logo/myIIT-logo-with-background.png";
import bookmarkFillIcon from "@assets/images/icons/bookmark_fill.png";
import menuFillIcon from "@assets/images/icons/menu_fill.png";

import {SearchField} from "@components/Search/SearchField";
import {NotificationButton} from "@components/Notification/NotificationButton";
import {ProfilePopover} from "@components/Other/ProfilePopover";
import {HeaderAppMobile} from "@components/Other/HeaderApp/HeaderAppMobile";

export const HeaderApp: React.FC<HeaderAppProps> = (props: HeaderAppProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    return (
        !matchesMobile ?
            <Box className={classes.header_main}>
                <Container className={classes.header_container} fluid mx={(!matchesPC && !matchesMobile) ? "sm" : "xl"}>
                    {(!matchesPC && !matchesMobile) &&
                        <Box className={classes.header_menu_block} mr="lg">
                            <ActionIcon className={classes.header_menu_button} variant="transparent" size="xl"
                                        aria-label="Menu">
                                <Image src={menuFillIcon} h={54} w="auto" fit="contain"/>
                            </ActionIcon>
                        </Box>
                    }
                    <Box className={classes.header_container_content}>
                        <Box className={classes.header_logo_block}>
                            <Image src={myIITLogoImg} h={(!matchesPC && !matchesMobile) ? 40 : 46} w="auto"
                                   fit="contain"/>
                        </Box>
                        <Box className={classes.header_content} ml={200}>
                            {matchesPC && <SearchField/>}
                            <Box className={classes.header_content_right_block}>
                                <Group gap="xs" mr="lg">
                                    <NotificationButton radius="sm"/>
                                    <ActionIcon color="#F6F6F6" size="lg" radius="sm">
                                        <Image w="auto" h={28} fit="contain" src={bookmarkFillIcon}/>
                                    </ActionIcon>
                                </Group>
                                <ProfilePopover/>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box> : <HeaderAppMobile {...props} />
    );
};