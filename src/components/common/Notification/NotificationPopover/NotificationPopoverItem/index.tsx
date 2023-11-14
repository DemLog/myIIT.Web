import React from "react";
import {NotificationPopoverItemProps} from "./props";
import classes from "./NotificationPopoverItem.module.css";

import {Avatar, Box, Button, Image, Text} from "@mantine/core";
import notificationFill from "@assets/images/icons/notifications_fill.png";
import priorityHighFill from "@assets/images/icons/priority_high_fill.png"

import {NotificationElementLevel} from "@models/notification/INotificationElement";

export const NotificationPopoverItem: React.FC<NotificationPopoverItemProps> = (props: NotificationPopoverItemProps) => {
    const getSrcImage = (level: NotificationElementLevel, avatar?: string) => {
        if (level === NotificationElementLevel.PRIMARY || level === NotificationElementLevel.SECONDARY) {
            if (!avatar) {
                return notificationFill;
            }
            return avatar;
        }
        return priorityHighFill;
    };

    const getColorLevel = (level: NotificationElementLevel) => (
        level === NotificationElementLevel.INFO ? "blue" :
            level === NotificationElementLevel.WARNING ? "yellow" :
                level === NotificationElementLevel.ERROR ? "red" :
                    "gray"
    );

    const getColorButton = (level: NotificationElementLevel) => {
        if (level === NotificationElementLevel.PRIMARY || level === NotificationElementLevel.WARNING || level === NotificationElementLevel.ERROR) {
            return {background: "#5B6CF0", text: "white"};
        }
        return {background: "#D7DBFF", text: "#5B6CF0"};
    };

    const getDateString = (date: Date) => (
        date.toLocaleString("ru", {day: "numeric", month: "long", hour: 'numeric', minute: 'numeric'})
    );

    return (
        <Box className={classes.main_container} px="xs">
            <Box className={classes.content}>
                <Box className={classes.image_box} pt={5}>
                    <Avatar
                        src={props.avatar}
                        size="lg"
                        variant="filled"
                        color={getColorLevel(props.level)}>
                        {!props.avatar && <Image className={classes.image_icon} h="100%" w="auto"
                                                 src={getSrcImage(props.level, props.avatar)}/>}
                    </Avatar>
                </Box>
                <Box className={classes.text_box} ml="md">
                    <Text fw={400} size="md">{props.title}</Text>
                    <Text className={classes.description_text} c="#585858" fw={100} size="sm">{props.description}</Text>
                    <Text c="#585858" fw={200} size="xs">
                        {getDateString(props.time)}
                        {props.service && <Text span inherit> 🞄 {props.service}</Text>}
                    </Text>
                </Box>
            </Box>
            {props.actionName &&
                <Box className={classes.action_box} ml="md">
                    <Button radius="lg" size="xs" color={getColorButton(props.level).background}>
                        <Text c={getColorButton(props.level).text} fw={300}>
                            {props.actionName}
                        </Text>
                    </Button>
                </Box>
            }
        </Box>
    );
};