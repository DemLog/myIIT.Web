import React from "react";
import { HeaderProps } from "./Header.types";
import classes from "./Header.module.css";

import { ActionIcon, Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Container, Text } from "@components/UI";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

import { ReactSVG } from "react-svg";
import myIITLogo from "@assets/images/logo/myIIT-logo-with-background.png";
import myIITLogoMobile from "@assets/images/logo/myIIT-logo-mobile.png";
import notificationIcon from "@assets/images/icons/w400/notifications_fill.svg";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

const HeaderComponent: React.FC<HeaderProps> = (props: HeaderProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');
    const { navigationStore } = useStores();

    return (
        <Box className={classes.main}>
            <Container>
                <Box className={classes.content} px="xs">
                    <Box className={classes.left_side_block}>
                        <Box className={classes.logo_block}>
                            <Image className={classes.logo_img} src={matchesMobile ? myIITLogoMobile : myIITLogo} h="40px" w="auto" fit="contain" />
                        </Box>
                        <Box className={classes.title_page_block}>
                            <Text size="extra-large" weight="medium">{navigationStore.getNamePage()}</Text>
                        </Box>
                    </Box>
                    <Box className={classes.right_side_block}>
                        <Box className={classes.action_button_block}>
                            <ActionIcon className={classes.notification_button} variant="transparent" radius="md" size="30px" color={getStyleColor("disabled-light")}>
                                <ReactSVG className={classes.notification_icon} src={notificationIcon} />
                            </ActionIcon>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export const Header = observer(HeaderComponent);