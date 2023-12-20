import React from "react";
import { NotificationCarouselItemProps } from "./NotificationCarouselItem.types";
import classes from "./NotificationCarouselItem.module.css";

import { Box } from "@mantine/core";
import { Text } from "@components/UI";
import { ReactSVG } from "react-svg";

export const NotificationCarouselItem: React.FC<NotificationCarouselItemProps> = (props: NotificationCarouselItemProps) => {

    return (
        <Box className={classes.main} style={{backgroundColor: props.color}} p="md" data-active={props.active} onClick={props.onClick}>
            <Box className={classes.icon_box}>
                <ReactSVG className={classes.icon} style={{fill: props.color}} src={props.icon}/>
            </Box>
            <Box className={classes.name_box}>
                <Text color="white" size="medium" weight="medium">{props.name}</Text>
            </Box>
        </Box>
    );
}