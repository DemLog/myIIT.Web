import React, {Fragment} from "react";
import {NotificationPopoverProps} from "./props";
import classes from "./NotificationPopover.module.css";

import {Box, Divider, Text} from "@mantine/core";
import {INotificationElement, NotificationElementLevel} from "@models/notification/INotificationElement";

import testImage from "@assets/images/toha.jpg";
import {NotificationPopoverItem} from "@components/Notification/NotificationPopover/NotificationPopoverItem";

const testNotificationList: INotificationElement[] = [
    {
        title: "Главный текст уведомления",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assubus tenetur? Adipisc",
        time: new Date(32423423),
        level: NotificationElementLevel.INFO,
        actionName: "Открыть"
    },
    {
        title: "Главный текст уведомления",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at beatae expe",
        time: new Date(32423423),
        level: NotificationElementLevel.WARNING,
        actionName: "Открыть"
    },
    {
        title: "Главный текст уведомления",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at beatae expedita minus",
        time: new Date(32423423),
        level: NotificationElementLevel.PRIMARY,
        avatar: testImage,
        actionName: "Ударить",
        service: "Сообщения"
    },
    {
        title: "Главный текст уведомления",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        time: new Date(32423423),
        level: NotificationElementLevel.SECONDARY,
        avatar: testImage
    }
];

export const NotificationPopover: React.FC<NotificationPopoverProps> = (props: NotificationPopoverProps) => {
    return (
        <Box className={classes.main_container}>
            <Box className={classes.content}>
            {testNotificationList.map((value, index) =>
                <Fragment>
                    <NotificationPopoverItem {...value} />
                    {!(index + 1 === testNotificationList.length) &&
                        <Divider my="xs" w="90%"/>
                    }
                </Fragment>
            )}
            </Box>

            <Divider mt="xs"/>

            <Box className={classes.action_box} pt={2}>
                <Text c="#5B6CF0" component="a" href="#">Показать все</Text>
            </Box>
        </Box>
    );
};