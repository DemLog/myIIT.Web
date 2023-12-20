import React from "react";
import { NotificationItemProps } from "./NotificationItem.types";
import classes from "./NotificationItem.module.css";

import { Avatar, Box } from "@mantine/core";
import { NotificationElementLevel } from "@models/notification/INotificationElement";
import errorIcon from "@assets/images/icons/w600/error.svg";
import warningIcon from "@assets/images/icons/w600/warning.svg";
import infoIcon from "@assets/images/icons/w600/info.svg";
import { getStyleColor, getStyleSize } from "@styles/core/helpers";
import { Button, Text } from "@components/UI";
import { ReactSVG } from "react-svg";

export const NotificationItem: React.FC<NotificationItemProps> = (props: NotificationItemProps) => {

    const getAvatarType = (level: NotificationElementLevel, avatar: string | undefined) => {
        switch (level) {
            case NotificationElementLevel.ERROR:
                return <Avatar variant="filled" color={getStyleColor("error-neutral")} size={getStyleSize("extra-large")}><ReactSVG className={classes.icon} src={errorIcon}/></Avatar>
            case NotificationElementLevel.WARNING:
                return <Avatar variant="filled" color={getStyleColor("warning-neutral")} size={getStyleSize("extra-large")}><ReactSVG className={classes.icon} src={warningIcon}/></Avatar>
            case NotificationElementLevel.INFO:
                return <Avatar variant="filled" color={getStyleColor("primary-neutral")} size={getStyleSize("extra-large")}><ReactSVG className={classes.icon} src={infoIcon}/></Avatar>
            case NotificationElementLevel.PRIMARY:
                return <Avatar variant="filled" color={getStyleColor("primary-neutral")} size={getStyleSize("extra-large")} src={avatar} />
            case NotificationElementLevel.SECONDARY:
                return <Avatar variant="filled" color={getStyleColor("secondary-neutral")} size={getStyleSize("extra-large")} src={avatar} />
        }
    };

    const getDateString = (date: Date) => (
        date.toLocaleString("ru", { day: "numeric", month: "long", hour: 'numeric', minute: 'numeric' })
    );

    return (
        <Box className={classes.main} mb="sm">
            <Box className={classes.left_block}>
                <Box className={classes.avatar_block}>
                    {getAvatarType(props.level, props.avatar)}
                </Box>
                <Box className={classes.content} ml="xs">
                    <Text size="medium" weight="regular">{props.title}</Text>
                    <Text size="13px" weight={200} color="text-secondary" mt={4}>{props.description}</Text>
                    <Text size="10px" weight={200} color="black" mt={6}>{getDateString(props.time)} 🞄 {props.service}</Text>
                </Box>
            </Box>
            {props.actionName && <Box className={classes.button_block}>
                <Button text={props.actionName} color="primary" size="small" />
            </Box>}
        </Box>
    );
}