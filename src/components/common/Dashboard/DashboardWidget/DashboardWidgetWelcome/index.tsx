import React from "react";
import {DashboardWidgetWelcomeProps} from "./props";
import classes from "./DashboardWidgetWelcome.module.css";

import {Box, Image, Text} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import cloudsAndSun from "@assets/images/dashboard/clouds-and-sun.png";

export const DashboardWidgetWelcome: React.FC<DashboardWidgetWelcomeProps> = (props: DashboardWidgetWelcomeProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    return (
        <Box className={classes.main_container} px={matchesMobile ? "lg" : ""}>
            <Box className={classes.content} py={matchesMobile ? 0 : 10} px={matchesMobile ? "" : "sm"}>
                <Text className={classes.content_text} fw={matchesMobile ? 400 : 500}
                      size={matchesMobile ? "28px" : "40px"} c={matchesMobile ? "#676767" : "#FFFFFF"}>Добрый день,
                    Антон!</Text>
            </Box>
            <Box className={classes.content_image_box}>
                <Image src={cloudsAndSun} h={matchesMobile ? 80 : 100} w="auto" fit="contain"/>
            </Box>
        </Box>
    );
};