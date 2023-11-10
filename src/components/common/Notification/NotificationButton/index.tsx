import React from "react";
import {NotificationButtonProps} from "./props";
import classes from "./NotificationButton.module.css";

import {ActionIcon, Image} from "@mantine/core";

import notificationFillIcon from "@assets/images/icons/notifications_fill.png";

export const NotificationButton: React.FC<NotificationButtonProps> = (props: NotificationButtonProps) => {
    return (
        <ActionIcon color="#F6F6F6" size="lg" radius="sm">
            <Image w="auto" h={28} fit="contain" src={notificationFillIcon}/>
        </ActionIcon>
    );
};