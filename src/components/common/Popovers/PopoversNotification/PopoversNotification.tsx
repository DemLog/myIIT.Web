import React, { useEffect, useState } from "react";
import { PopoversNotificationProps } from "./PopoversNotification.types";
import classes from "./PopoversNotification.module.css";

import { Box, Divider } from "@mantine/core";
import { Button, Popover, Text } from "@components/UI";
import { NotificationItem } from "@components/Notification";
import { NotificationElementLevel } from "@models/notification/INotificationElement";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import apiService from "@core/services/apiService";
import { IResponseNotification } from "@models/notification/IResponseNotification";

const PopoversNotificationComponent: React.FC<PopoversNotificationProps> = (props: PopoversNotificationProps) => {
    const { userStore } = useStores();
    const [notification, setNotification] = useState<IResponseNotification[]>([]);

    useEffect(() => {
        const loadingData = async () => {
            const data = await apiService({ method: "GET", url: "notification.getNotificationUser", token: userStore.getSession()?.token });
            if (data?.response_code === 200) {
                const notific = data.data as IResponseNotification[];
                setNotification(notific.slice(0, 4));
            }
        };

        loadingData();
    }, [userStore.notificationCount]);

    // Функция для группировки уведомлений по дням
    const groupNotificationsByDay = () => {
        const groupedNotifications: { [key: string]: IResponseNotification[] } = {};

        for (const notif of notification) {
            const dayKey = formatDate(new Date(notif.time));

            if (!groupedNotifications[dayKey]) {
                groupedNotifications[dayKey] = [];
            }

            groupedNotifications[dayKey].push(notif);
        }

        return groupedNotifications;
    };

    return (
        <Popover target={props.children} title="Уведомления" onChange={props.onChange} opened={props.opened}>
            <Box className={classes.container_main}>
                <Box className={classes.main} mt="sm">
                    {Object.entries(groupNotificationsByDay()).map(([day, notifications]) => (
                        <Box className={classes.time_group} key={day}>
                            <Text size="small" weight="medium" color="text-secondary" mb={6}>
                                {day}
                            </Text>

                            {notifications.map((notif) => (
                                <NotificationItem
                                    key={notif.id}
                                    title={notif.title}
                                    description={notif.description}
                                    time={new Date(notif.time)}
                                    level={notif.level}
                                    service={notif.service}
                                />
                            ))}
                        </Box>
                    ))}
                </Box>
                <Box className={classes.show_all_button}>
                    <Divider w="100%" />
                    <Button variant="transparent" text="Показать все" colorText="primary" size="small" fullWidth onClick={props.openPanel} />
                </Box>
            </Box>
        </Popover>
    );
};

export const PopoversNotification = observer(PopoversNotificationComponent);

// Функция для форматирования даты (вы можете использовать свой метод форматирования)
function formatDate(date: Date): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}