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

    return (
        <Widget
            backgroundColor={matchesMobile ? "white" : "linear-gradient(180deg, rgba(0,163,255,1) 0%, rgba(0,255,209,0.039279037647033) 100%)"}
            noneTopBorder={matchesMobile}
        >
            <Box className={classes.content}>
                <Box className={classes.title_box} py={4} px="md">
                    <Text size={matchesMobile ? "extra-large" : "46px"} weight={matchesMobile ? "regular" : "medium"} color={getStyleColor(matchesMobile ? "text-primary" : "white")}>Доброе утро, {userStore.getUser()?.firstName}!</Text>
                </Box>
                <Box className={classes.image_box}>
                    <Image src={sticker} h={matchesMobile ? "66px" : "76px"} w="auto" fit="contain" />
                </Box>
            </Box>
        </Widget>
    )
}

export const WidgetWelcome = observer(WidgetWelcomeComponent);