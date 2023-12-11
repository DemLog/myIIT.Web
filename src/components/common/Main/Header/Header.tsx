import React from "react";
import { HeaderProps } from "./Header.types";
import classes from "./Header.module.css";

import { ActionIcon, Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Container, Text } from "@components/UI";
import { HeaderProfileButton } from "./HeaderProfileButton";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

import { ReactSVG } from "react-svg";
import myIITLogo from "@assets/images/logo/myIIT-logo-with-background.png";
import myIITLogoMobile from "@assets/images/logo/myIIT-logo-mobile.png";
import notificationIcon from "@assets/images/icons/w400/notifications_fill.svg";

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    return (
        <Box className={classes.main}>
            <Container>
                <Box className={classes.content} px="xs">
                    <Box className={classes.left_side_block}>
                        <Box className={classes.logo_block}>
                            <Image className={classes.logo_img} src={matchesMobile ? myIITLogoMobile : myIITLogo} h="40px" w="auto" fit="contain" />
                        </Box>
                        {matchesMobile && <Box className={classes.title_page_block} ml="xs">
                            <Text lts="-1px" size="extra-large" weight="medium">Название окна</Text>
                        </Box>}
                    </Box>
                    <Box className={classes.right_side_block}>
                        <Box className={classes.action_button_block}>
                            <ActionIcon className={classes.notification_button} variant="transparent" radius="md" size="30px" color={getStyleColor("disabled-light")}>
                                <ReactSVG className={classes.notification_icon} src={notificationIcon} />
                            </ActionIcon>
                        </Box>
                        {!matchesMobile && <Box className={classes.profile_block} ml="md">
                            <HeaderProfileButton />
                        </Box>}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};