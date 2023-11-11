import React from "react";
import {HeaderAppProps} from "./props";
import classes from "./HeaderApp.module.css";

import {ActionIcon, Box, Burger, Container, Drawer, Group, Image} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

import myIITLogoImg from "@assets/images/logo/myIIT-logo-with-background.png";
import bookmarkFillIcon from "@assets/images/icons/bookmark_fill.png";
import menuFillIcon from "@assets/images/icons/menu_fill.png";

import {SearchField} from "@components/Search/SearchField";
import {NotificationButton} from "@components/Notification/NotificationButton";
import {ProfilePopover} from "@components/Other/ProfilePopover";
import {HeaderAppMobile} from "@components/Other/HeaderApp/HeaderAppMobile";
import {NavigationBlock} from "@components/Main/NavigationBlock";
import {ProfileCard} from "@components/Main/ProfileCard";
import {FooterLinksBlock} from "@components/Main/FooterLinksBlock";

export const HeaderApp: React.FC<HeaderAppProps> = (props: HeaderAppProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const [openedMenu, {toggle: setOpenedMenu, close}] = useDisclosure();

    return (
        !matchesMobile ?
            <Box className={classes.header_main}>
                <Drawer opened={openedMenu} onClose={close} size="sm"
                        classNames={{content: classes.drawer_content}}>
                    <ProfileCard />
                    <NavigationBlock fullComponent closeDrawer={close}/>
                    <FooterLinksBlock />
                </Drawer>
                <Container className={classes.header_container} fluid mx={(!matchesPC && !matchesMobile) ? "sm" : "xl"}>
                    {(!matchesPC && !matchesMobile) &&
                        <Box className={classes.header_menu_block} mr="lg">
                            <Burger opened={openedMenu} size="lg" onClick={setOpenedMenu} aria-label="Menu"/>
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