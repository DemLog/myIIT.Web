import React from "react";
import classes from "./WidgetWelcome.module.css";

import { Widget, Text } from "@components/UI";
import { Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import sticker from "@assets/images/dashboard/clouds-and-sun.png";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

const WidgetWelcomeComponent: React.FC = () => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');
    const { userStore } = useStores();

    const getGreeting = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            return 'Доброе утро';
        } else if (currentHour >= 12 && currentHour < 18) {
            return 'Доброго дня';
        } else if (currentHour >= 18 && currentHour < 24) {
            return 'Добрый вечер';
        } else {
            return 'Доброй ночи';
        }
    };

    return (
        <Widget
            backgroundColor={matchesMobile ? "white" : "linear-gradient(180deg, rgba(10,142,253,1) 0%, rgba(127,228,236,1) 50%, rgba(222,246,242,1) 100%)"}
        >
            <Box className={classes.content}>
                <Box className={classes.title_box} py={4} px="md">
                    <Text size={matchesMobile ? "large" : "38px"} weight={matchesMobile ? "regular" : "medium"} color={matchesMobile ? "text-primary" : "white"}>{getGreeting()}, {userStore.getUser()?.firstName}!</Text>
                </Box>
                <Box className={classes.image_box}>
                    <Image src={sticker} h={matchesMobile ? "54px" : "76px"} w="auto" fit="contain" />
                </Box>
            </Box>
        </Widget>
    )
}

export const WidgetWelcome = observer(WidgetWelcomeComponent);