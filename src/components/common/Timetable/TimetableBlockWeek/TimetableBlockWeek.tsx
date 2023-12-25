import React from "react";
import { TimetableBlockWeekProps } from "./TimetableBlockWeek.types";
import classes from "./TimetableBlockWeek.module.css";

import { Box, ScrollArea, Stepper } from "@mantine/core";
import { Text } from "@components/UI";
import { TimetableBlockItem } from "../TimetableBlockItem";

enum DayWeek {
    Monday = "Понедельник",
    Tuesday = "Вторник",
    Wednesday = "Среда",
    Thursday = "Четверг",
    Friday = "Пятница",
    Saturday = "Суббота",
    Sunday = "Воскресенье"
}

export const TimetableBlockWeek: React.FC<TimetableBlockWeekProps> = (props: TimetableBlockWeekProps) => {
    return (
        <ScrollArea scrollbarSize={10} scrollHideDelay={0} w="100%">
            {props.data && <Box className={classes.main} mt="xs">
                <Box className={classes.content}>
                    <Box className={classes.header_day}>
                        <Box className={classes.header_day_item} p="xs">
                            <Text weight="medium" color="white">Понедельник</Text>
                        </Box>
                        <Box className={classes.header_day_item} p="xs">
                            <Text weight="medium" color="white">Вторник</Text>
                        </Box>
                        <Box className={classes.header_day_item} p="xs">
                            <Text weight="medium" color="white">Среда</Text>
                        </Box>
                        <Box className={classes.header_day_item} p="xs">
                            <Text weight="medium" color="white">Четверг</Text>
                        </Box>
                        <Box className={classes.header_day_item} p="xs">
                            <Text weight="medium" color="white">Пятница</Text>
                        </Box>
                        <Box className={classes.header_day_item} p="xs">
                            <Text weight="medium" color="white">Суббота</Text>
                        </Box>
                    </Box>
                    <Box className={classes.timetable_day} mt="xs">

                        <Box className={classes.timetable_day_item}>
                            {props.data.filter(t => t.dayWeek === DayWeek.Monday).length > 0 ?
                                props.data.filter(t => t.dayWeek === DayWeek.Monday).map(l =>
                                    <TimetableBlockItem
                                        type={l.subject.type}
                                        subject={l.subject.title}
                                        teacher={l.lecture.map(t => `${t.lastName} ${t.firstName[0]}. ${t.patronymic[0]}.`).toString()}
                                        cabinet={l.cabinet}
                                        time={`${new Date(l.time.startTime).getHours()}:${new Date(l.time.startTime).getMinutes()}-${new Date(l.time.endTime).getHours()}:${new Date(l.time.endTime).getMinutes()}`} />
                                ) :
                                <TimetableBlockItem type="" subject="Свободный день" teacher="" cabinet="" time="" />}
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            {props.data.filter(t => t.dayWeek === DayWeek.Tuesday).length > 0 ?
                                props.data.filter(t => t.dayWeek === DayWeek.Tuesday).map(l =>
                                    <TimetableBlockItem
                                        type={l.subject.type}
                                        subject={l.subject.title}
                                        teacher={l.lecture.map(t => `${t.lastName} ${t.firstName[0]}. ${t.patronymic[0]}.`).toString()}
                                        cabinet={l.cabinet}
                                        time={`${new Date(l.time.startTime).getHours()}:${new Date(l.time.startTime).getMinutes()}-${new Date(l.time.endTime).getHours()}:${new Date(l.time.endTime).getMinutes()}`} />
                                ) :
                                <TimetableBlockItem type="" subject="Свободный день" teacher="" cabinet="" time="" />}
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            {props.data.filter(t => t.dayWeek === DayWeek.Wednesday).length > 0 ?
                                props.data.filter(t => t.dayWeek === DayWeek.Wednesday).map(l =>
                                    <TimetableBlockItem
                                        type={l.subject.type}
                                        subject={l.subject.title}
                                        teacher={l.lecture.map(t => `${t.lastName} ${t.firstName[0]}. ${t.patronymic[0]}.`).toString()}
                                        cabinet={l.cabinet}
                                        time={`${new Date(l.time.startTime).getHours()}:${new Date(l.time.startTime).getMinutes()}-${new Date(l.time.endTime).getHours()}:${new Date(l.time.endTime).getMinutes()}`} />
                                ) :
                                <TimetableBlockItem type="" subject="Свободный день" teacher="" cabinet="" time="" />}
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            {props.data.filter(t => t.dayWeek === DayWeek.Thursday).length > 0 ?
                                props.data.filter(t => t.dayWeek === DayWeek.Thursday).map(l =>
                                    <TimetableBlockItem
                                        type={l.subject.type}
                                        subject={l.subject.title}
                                        teacher={l.lecture.map(t => `${t.lastName} ${t.firstName[0]}. ${t.patronymic[0]}.`).toString()}
                                        cabinet={l.cabinet}
                                        time={`${new Date(l.time.startTime).getHours()}:${new Date(l.time.startTime).getMinutes()}-${new Date(l.time.endTime).getHours()}:${new Date(l.time.endTime).getMinutes()}`} />
                                ) :
                                <TimetableBlockItem type="" subject="Свободный день" teacher="" cabinet="" time="" />}
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            {props.data.filter(t => t.dayWeek === DayWeek.Friday).length > 0 ?
                                props.data.filter(t => t.dayWeek === DayWeek.Friday).map(l =>
                                    <TimetableBlockItem
                                        type={l.subject.type}
                                        subject={l.subject.title}
                                        teacher={l.lecture.map(t => `${t.lastName} ${t.firstName[0]}. ${t.patronymic[0]}.`).toString()}
                                        cabinet={l.cabinet}
                                        time={`${new Date(l.time.startTime).getHours()}:${new Date(l.time.startTime).getMinutes()}-${new Date(l.time.endTime).getHours()}:${new Date(l.time.endTime).getMinutes()}`} />
                                ) :
                                <TimetableBlockItem type="" subject="Свободный день" teacher="" cabinet="" time="" />}
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            {props.data.filter(t => t.dayWeek === DayWeek.Sunday).length > 0 ?
                                props.data.filter(t => t.dayWeek === DayWeek.Sunday).map(l =>
                                    <TimetableBlockItem
                                        type={l.subject.type}
                                        subject={l.subject.title}
                                        teacher={l.lecture.map(t => `${t.lastName} ${t.firstName[0]}. ${t.patronymic[0]}.`).toString()}
                                        cabinet={l.cabinet}
                                        time={`${new Date(l.time.startTime).getHours()}:${new Date(l.time.startTime).getMinutes()}-${new Date(l.time.endTime).getHours()}:${new Date(l.time.endTime).getMinutes()}`} />
                                ) :
                                <TimetableBlockItem type="" subject="Свободный день" teacher="" cabinet="" time="" />}
                        </Box>
                    </Box>
                </Box>
            </Box>
            }
        </ScrollArea>);
}