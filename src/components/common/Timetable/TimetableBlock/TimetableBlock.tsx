import React, { Fragment, useEffect, useState } from "react";
import { TimetableBlockProps } from "./TimetableBlock.types";
import classes from "./TimetableBlock.module.css";

import { Block, Text } from "@components/UI";
import { Box, Divider } from "@mantine/core";
import { CarouselTabType } from "@components/UI/CarouselTabs/CarouselTabs.types";
import { CarouselTabs, CarouselTabsBlock } from "@components/UI/CarouselTabs";
import { TimetableBlockDay } from "../TimetableBlockDay";
import { TimetableBlockWeek } from "../TimetableBlockWeek";
import { useMediaQuery } from "@mantine/hooks";
import apiService from "@core/services/apiService";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

const tabsList: CarouselTabType[] = [
    {
        value: "today",
        label: "Сегодня"
    },
    {
        value: "tomorrow",
        label: "Завтра"
    },
    {
        value: "week",
        label: "Неделя"
    },
];

enum SubjectType {
    Unknown = "Неизвестно",
    Lecture = "Лекция",
    Practice = "Практика"
}

enum DayWeek {
    Monday = "Понедельник",
    Tuesday = "Вторник",
    Wednesday = "Среда",
    Thursday = "Четверг",
    Friday = "Пятница",
    Saturday = "Суббота",
    Sunday = "Воскресенье"
}

enum Subgroup {
    All = 0,
    First,
    Second
}

type timetableToday = Array<
    {
        "id": number,
        "subject": {
            "title": string,
            "type": SubjectType,
        },
        "groups": Array<{
            "id": number,
        }>
        ,
        "isEvenWeek": boolean,
        "lecture": Array<
            {
                "lastName": string,
                "firstName": string,
                "patronymic": string,
                "position": string,
            }>
        ,
        "cabinet": string,
        "dayWeek": DayWeek,
        "subgroup": Subgroup,
        "time": {
            "number": number,
            "startTime": Date,
            "endTime": Date,
        }
    }
>

const TimetableBlockComponent: React.FC<TimetableBlockProps> = (props: TimetableBlockProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');
    const [activeTab, setActiveTab] = useState<string>("today");

    const [evenWeek, setEvenWeek] = useState<boolean>(false);
    const [today, setToday] = useState<timetableToday>();
    const { userStore } = useStores();

    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];

    const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
    const formattedDate2 = `${dayOfWeek}, ${dayOfMonth} ${month}`;

    useEffect(() => {
        const loadingDataEven = async () => {
            const data = await apiService({
                method: "GET",
                url: "timetable.getEvenWeek",
                token: userStore.getSession()?.token,
            });
            if (data?.response_code === 200) {
                const f = data.data as { "isEvenWeek": boolean }
                setEvenWeek(f.isEvenWeek)
            }
        }

        const loadingDataToday = async () => {
            const data = await apiService({
                method: "GET",
                url: "timetable.getWeek?is-even-week=true",
                token: userStore.getSession()?.token,
            });
            if (data?.response_code === 200) {
                const f = data.data as timetableToday
                setToday(f)

            }
        }

        loadingDataEven();
        loadingDataToday();
    }, []);

    return (
        <Block
            title={matchesMobile ? undefined : "Расписание ПрИ-302"}
        >
            {today &&
                <Box className={classes.content}>
                    <Box className={classes.header}>
                        <Box className={classes.tabs_box}>
                            <CarouselTabs tabs={tabsList} activeTab={activeTab} onTabChange={setActiveTab} fullWidth={!matchesMobile} />
                        </Box>
                        {!matchesMobile && activeTab !== "week" && <Box className={classes.info_box}>
                            <Text weight="medium">{activeTab === "today" ? formattedDate : "Вторник, 22 декабря"}</Text>
                        </Box>}
                        <Divider mt={32} />
                    </Box>
                    <CarouselTabsBlock activeTab={activeTab}>
                        [
                        {<Box value="today">
                            <TimetableBlockDay data={today.filter(t => t.dayWeek === DayWeek.Monday)} />
                        </Box>},
                        {<Box value="tomorrow">
                            <TimetableBlockDay data={today.filter(t => t.dayWeek === DayWeek.Tuesday)} />
                        </Box>},
                        {<Box value="week">
                            <TimetableBlockWeek data={today}/>
                        </Box>}
                        ]
                    </CarouselTabsBlock>
                    <Box className={classes.footer} mt="xs">
                        <Box className={classes.timetable_info} p={6} mr="xs">
                            <Text>{evenWeek ? "Вторая неделя" : "Первая неделя"}</Text>
                        </Box>
                        <Box className={classes.timetable_info} p={6}>
                            <Text>{activeTab === "today" ? (today ? `${today.filter(t => t.dayWeek === DayWeek.Monday).length} пары` : "Пар нет!") : activeTab === "tommorow" ? (today ? `${today.filter(t => t.dayWeek === DayWeek.Tuesday).length} пары` : "Пар нет!") : (today ? `${today.length} пары` : "Пар нет!")}</Text>
                        </Box>
                    </Box>
                </Box>
            }

        </Block>
    );
}

export const TimetableBlock = observer(TimetableBlockComponent);