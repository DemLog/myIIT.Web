import React, { useEffect, useState } from "react";
import { NotificationPanelProps } from "./NotificationPanel.types";
import classes from "./NotificationPanel.module.css";

import { Box, ScrollArea } from "@mantine/core";
import { Panel, Text } from "@components/UI";
import { NotificationCarouselItem, NotificationItem } from "@components/Notification";

import notificationFillIcon from "@assets/images/icons/w500/notifications_fill.svg";
import scheduleFillIcon from "@assets/images/icons/w500/schedule_fill.svg";
import calendarClockFillIcon from "@assets/images/icons/w500/calendar_clock_fill.svg";
import mailFillIcon from "@assets/images/icons/w500/mail_fill.svg";
import { NotificationElementLevel } from "@models/notification/INotificationElement";
import { IResponseNotification } from "@models/notification/IResponseNotification";
import apiService from "@core/services/apiService";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

const NotificationPanelComponent: React.FC<NotificationPanelProps> = (props: NotificationPanelProps) => {
    const [activeCarousel, setActiveCarousel] = useState(0);
    const [notifications, setNotifications] = useState<IResponseNotification[]>([]);

    const { userStore } = useStores();

    const handleChangeCarousel = (index: number) => {
        setActiveCarousel(index);
    };

    useEffect(() => {
        const loadingData = async () => {
            const data = await apiService({ method: "GET", url: "notification.getNotificationUser", token: userStore.getSession()?.token });
            if (data?.response_code === 200) {
                const notific = data.data as IResponseNotification[];
                setNotifications(notific);
            }
        };

        loadingData();
    }, [userStore.notificationCount]);

    // Функция для группировки уведомлений по дням
    const groupNotificationsByDay = () => {
        const groupedNotifications: { [key: string]: IResponseNotification[] } = {};

        for (const notif of notifications) {
            const dayKey = formatDate(new Date(notif.time));

            if (!groupedNotifications[dayKey]) {
                groupedNotifications[dayKey] = [];
            }

            groupedNotifications[dayKey].push(notif);
        }

        return groupedNotifications;
    };

    // Функция для фильтрации уведомлений по сервису
    const filterNotificationsByService = (service: string) => {
        return notifications.filter((notif) => service === "Все" || notif.service === service);
    };

    const filteredNotifications = filterNotificationsByService(["Все", "Расписание", "Мероприятия", "Сообщения"][activeCarousel]);

    return (
        <Panel opened={props.opened} onClose={props.onClose} title="Уведомления">
            <ScrollArea type="never" offsetScrollbars>
                <Box className={classes.carousel_block} m="xs">
                    <NotificationCarouselItem active={activeCarousel === 0} color="#03befc" icon={notificationFillIcon} name="Все" onClick={() => handleChangeCarousel(0)} />
                    <NotificationCarouselItem active={activeCarousel === 1} color="#03fca5" icon={scheduleFillIcon} name="Расписание" onClick={() => handleChangeCarousel(1)} />
                    <NotificationCarouselItem active={activeCarousel === 2} color="#fc037b" icon={calendarClockFillIcon} name="Мероприятия" onClick={() => handleChangeCarousel(2)} />
                    <NotificationCarouselItem active={activeCarousel === 3} color="#fca103" icon={mailFillIcon} name="Сообщения" onClick={() => handleChangeCarousel(3)} />
                </Box>
            </ScrollArea>

            <Box className={classes.main} mt="sm">
                {Object.entries(groupNotificationsByDay()).map(([day, dayNotifications]) => {
                    const filteredDayNotifications = filterNotificationsByService(["Все", "Расписание", "Мероприятия", "Сообщения"][activeCarousel]);

                    if (filteredDayNotifications.some((notif) => formatDate(new Date(notif.time)) === day)) {
                        return (
                            <Box className={classes.time_group} key={day}>
                                <Text size="small" weight="medium" color="text-secondary" mb={6}>
                                    {day}
                                </Text>

                                {filteredDayNotifications
                                    .filter((notif) => formatDate(new Date(notif.time)) === day)
                                    .map((notif) => (
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
                        );
                    }

                    return null; // Если нет уведомлений в этот день после фильтрации, не отображаем группу
                })}
            </Box>

        </Panel>
    );
};

export const NotificationPanel = observer(NotificationPanelComponent);

function formatDate(date: Date): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}