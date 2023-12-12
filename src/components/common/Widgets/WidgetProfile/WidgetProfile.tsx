import React from "react";
import classes from "./WidgetProfile.module.css";

import { Widget, Text } from "@components/UI";
import { ActionIcon, Box, Image, Skeleton } from "@mantine/core";

import { ReactSVG } from "react-svg";
import expandIcon from "@assets/images/icons/w200/expand_more_fill.svg";

import { useNavigate } from "react-router";

export const WidgetProfile: React.FC = () => {
    const navigation = useNavigate();

    return (
        <Widget
            backgroundColor="white"
        >
            <Box className={classes.content}>
                <Box className={classes.info_box} px="md">
                    <Box className={classes.avatar_box}>
                        <Skeleton h="46px" w="46px" circle />
                    </Box>
                    <Box className={classes.name_box} ml="xs">
                        <Skeleton h="20px" w="178px" />
                        <Skeleton h="14px" w="50px" />
                    </Box>
                </Box>
                <Box className={classes.button_box}>
                    <ActionIcon variant="transparent" onClick={() => navigation("/profile")}>
                        <ReactSVG className={classes.icon} src={expandIcon} />
                    </ActionIcon>
                </Box>
            </Box>
        </Widget>
    )
}