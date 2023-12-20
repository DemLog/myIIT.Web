import React, { useEffect, useState } from "react";
import { HeaderProps } from "./Header.types";
import classes from "./Header.module.css";

import { ActionIcon, Box, Image, Indicator } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { Container, Text } from "@components/UI";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

import { ReactSVG } from "react-svg";
import myIITLogo from "@assets/images/logo/myIIT-logo-with-background.png";
import myIITLogoMobile from "@assets/images/logo/myIIT-logo-mobile.png";
import notificationIcon from "@assets/images/icons/w400/notifications_fill.svg";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { PopoversNotification } from "@components/Popovers";
import { NotificationPanel } from "@components/Panels";
import arrowBackIcon from "@assets/images/icons/w400/arrow_back.svg";
import { apiServiceWs } from "@core/services/apiService";
import { IResponseNotification } from "@models/notification/IResponseNotification";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';

const HeaderComponent: React.FC<HeaderProps> = (props: HeaderProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');
    const { navigationStore, userStore } = useStores();

    const [openedNotification, setOpenedNotification] = useState(false);
    const [openedPanelNotification, { open: openPanelNotification, close: closePanelNotification }] = useDisclosure(false);

    const handleOpenNotification = (opened: boolean) => {
        userStore.notificationCount = 0;
        setOpenedNotification(opened);
    };

    const handleOpenPanel = () => {
        userStore.notificationCount = 0;
        setOpenedNotification(false);
        openPanelNotification();
    };


    return (
        <Box className={classes.main}>
            <NotificationPanel opened={openedPanelNotification} onClose={closePanelNotification} />
            <Container>
                <Box className={classes.content} px="xs">
                    <Box className={classes.left_side_block}>
                        {matchesMobile && navigationStore.getActivePanel() && <ActionIcon
                            variant="transparent"
                            size="30px"
                            radius="xl"
                            onClick={navigationStore.handleBackPanel}
                            mr="xs"
                        >
                            <ReactSVG className={classes.icon_back} src={arrowBackIcon} />
                        </ActionIcon>}
                        <Box className={classes.logo_block}>
                            <Image className={classes.logo_img} src={matchesPC ? myIITLogo : myIITLogoMobile} h="40px" w="auto" fit="contain" />
                        </Box>
                        <Box className={classes.title_page_block} ml={matchesPC ? 0 : "sm"}>
                            <Text size="extra-large" weight="medium">{matchesMobile && navigationStore.getActivePanel() ? navigationStore.getActivePanelName() : navigationStore.getNamePage()}</Text>
                        </Box>
                    </Box>
                    <Box className={classes.right_side_block}>
                        <Box className={classes.action_button_block}>
                            {!matchesMobile && <PopoversNotification opened={openedNotification} onChange={handleOpenNotification} openFull={openPanelNotification} openPanel={handleOpenPanel}>
                                <Indicator color="red" inline offset={5} size={20} withBorder disabled={userStore.notificationCount < 1} label={userStore.notificationCount}>
                                    <ActionIcon className={classes.notification_button} variant="transparent" radius="md" size="30px" color={getStyleColor("disabled-light")} onClick={() => handleOpenNotification(!openedNotification)}>
                                        <ReactSVG className={classes.notification_icon} data-actived={openedNotification} src={notificationIcon} />
                                    </ActionIcon>
                                </Indicator>
                            </PopoversNotification>}
                            {matchesMobile &&
                                <Indicator color="red" inline offset={5} size={20} withBorder disabled={userStore.notificationCount < 1} label={userStore.notificationCount}>
                                    <ActionIcon className={classes.notification_button} variant="transparent" radius="md" size="30px" color={getStyleColor("disabled-light")} onClick={openPanelNotification}>
                                        <ReactSVG className={classes.notification_icon} data-actived={openedNotification} src={notificationIcon} />
                                    </ActionIcon>
                                </Indicator>
                            }
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export const Header = observer(HeaderComponent);