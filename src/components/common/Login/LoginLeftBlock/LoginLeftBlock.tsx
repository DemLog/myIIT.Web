import React from "react";
import {LoginLeftBlockProps} from "./LoginLeftBlock.types";
import classes from "./LoginLeftBlock.module.css";

import deviceCloud from "@assets/images/login/device-cloud.gif";
import vectorsBackground from "@assets/images/login/vectors-background.png";
import googlePlayBadge from "@assets/images/login/googleplay.png";

import {Box, Image, UnstyledButton} from "@mantine/core";

import {Text} from "@components/UI";

export const LoginLeftBlock: React.FC<LoginLeftBlockProps> = (props: LoginLeftBlockProps) => {
    return (
        <Box className={classes.main} px="xl">
            <Box className={classes.graphics_block}>
                <Image className={classes.graphics_vector} src={vectorsBackground} fit="contain"/>
                <Image className={classes.graphics_mobile} src={deviceCloud} fit="contain"/>
            </Box>

            <Box className={classes.text_block}>
                <Text size="40px" weight="medium" color="text-primary" ta="center">Оставайся всегда на связи</Text>
                <Text size="large" weight="light" color="text-secondary" ta="center">Приложение myIIT для мобильных устройств</Text>
            </Box>

            <Box className={classes.download_block} mt="lg">
                <UnstyledButton><Image src={googlePlayBadge}/></UnstyledButton>
            </Box>
        </Box>
    );
};
