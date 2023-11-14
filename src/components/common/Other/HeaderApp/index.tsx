import React from "react";
import {HeaderAppProps} from "./props";
import classes from "./HeaderApp.module.css";

import {ActionIcon, Box, Burger, Container, Drawer, Group, Image, Skeleton} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

import myIITLogoImg from "@assets/images/logo/myIIT-logo-with-background.png";
import bookmarkFillIcon from "@assets/images/icons/bookmark_fill.png";

import {SearchField} from "@components/Search/SearchField";
import {NotificationButton} from "@components/Notification/NotificationButton";
import {ProfilePopover} from "components/common/Profile/ProfilePopover";
import {HeaderAppMobile} from "@components/Other/HeaderApp/HeaderAppMobile";
import {NavigationBlock} from "@components/Main/NavigationBlock";
import {ProfileCard} from "@components/Main/ProfileCard";
import {FooterLinksBlock} from "@components/Main/FooterLinksBlock";
import {PopoverApp} from "@components/Other/PopoverApp";
import expandMoreFillIcon from "@assets/images/icons/expand_more_fill.png";
import {NotificationPopover} from "@components/Notification/NotificationPopover";
import {SearchPopover} from "@components/Search/SearchPopover";

export const HeaderApp: React.FC<HeaderAppProps> = (props: HeaderAppProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const [openedMenu, {toggle: setOpenedMenu, close}] = useDisclosure();

    return (
        !matchesMobile ?
            <Box className={classes.header_main}>
                <Drawer opened={openedMenu} onClose={close} size="sm"
                        classNames={{content: classes.drawer_content}}>
                    <ProfileCard/>
                    <NavigationBlock closeDrawer={close}/>
                    <FooterLinksBlock/>
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
                            {matchesPC &&
                                <PopoverApp
                                    title="Поиск"
                                    popover={<SearchPopover/>}
                                    popoverProps={{
                                        position: "bottom-start",
                                        width: 350
                                    }}
                                >
                                    <Box className={classes.search_field_box}><SearchField/></Box>
                                </PopoverApp>
                            }
                            <Box className={classes.header_content_right_block}>
                                <Group gap="xs" mr="lg">
                                    <PopoverApp title="Уведомления"
                                                popover={<NotificationPopover/>}
                                                popoverProps={{
                                                    width: 580,
                                                    position: matchesPC ? "bottom-end" : "bottom",
                                                    offset: 9
                                                }}>
                                        <Box className={classes.notification_button_box}>
                                            <NotificationButton radius="sm"/>
                                        </Box>
                                    </PopoverApp>
                                    <ActionIcon color="#F6F6F6" size="lg" radius="sm">
                                        <Image w="auto" h={28} fit="contain" src={bookmarkFillIcon}/>
                                    </ActionIcon>
                                </Group>
                                <PopoverApp popover={<ProfilePopover/>}
                                            popoverProps={{width: 260, position: "bottom-end", offset: 9}}>
                                    <Box className={classes.profile_main}>
                                        <Skeleton height={42} circle/>
                                        <Box className={classes.profile_name_block} ml="xs">
                                            <Skeleton height={14} w={140} radius="xl"/>
                                            <Skeleton height={10} w={50} radius="xl" mt={2}/>
                                        </Box>
                                        <Box className={classes.profile_expand_more_block} ml={2}>
                                            <Image h={28} w="auto" fit="contain" src={expandMoreFillIcon}/>
                                        </Box>
                                    </Box>
                                </PopoverApp>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box> : <HeaderAppMobile {...props} />
    );
};