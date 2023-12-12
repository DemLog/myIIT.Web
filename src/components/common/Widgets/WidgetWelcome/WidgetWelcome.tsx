import React from "react";
import classes from "./WidgetWelcome.module.css";

import { Widget, Text } from "@components/UI";
import { Box, Image } from "@mantine/core";

import sticker from "@assets/images/dashboard/clouds-and-sun.png";

export const WidgetWelcome: React.FC = () => {
    return (
        <Widget>
            <Box className={classes.content}>
                <Box className={classes.title_box} py={4} px="md">
                    <Text size="46px" weight="medium" color="white">Доброе утро, студент!</Text>
                </Box>
                <Box className={classes.image_box}>
                    <Image src={sticker} h="76px" w="auto" fit="contain" />
                </Box>
            </Box>
        </Widget>
    )
}