import React from "react";
import {DashboardWidgetUserLevelProps} from "./props";
import classes from "./DashboardWidgetUserLevel.module.css";

import {ActionIcon, Avatar, Box, Image, Text} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import {ProfileCardLevel} from "@components/Main/ProfileCard/ProfileCardLevel";

import arrowForwardFill from "@assets/images/icons/arrow_forward_fill.png";

export const DashboardWidgetUserLevel: React.FC<DashboardWidgetUserLevelProps> = (props: DashboardWidgetUserLevelProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    return (
        <Box className={classes.main_container} py="xs">
            <Box className={classes.avatar_box}>
                <Avatar color="black" radius="xl" size={60}>ОА</Avatar>
            </Box>
            <Box className={classes.content_box} mx="xs">
                <Text fw={100}>Уровень пользователя:</Text>
                <ProfileCardLevel level={5} progress={60}/>
            </Box>
            <Box className={classes.arrow_button_box}>
                <ActionIcon variant="transparent">
                    <Image className={classes.arrow_button_image} h="xl" w="auto" fit="contain" src={arrowForwardFill}/>
                </ActionIcon>
            </Box>
        </Box>
    );
};