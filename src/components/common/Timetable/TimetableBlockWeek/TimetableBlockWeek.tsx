import React from "react";
import { TimetableBlockWeekProps } from "./TimetableBlockWeek.types";
import classes from "./TimetableBlockWeek.module.css";

import { Box, ScrollArea, Stepper } from "@mantine/core";
import { Text } from "@components/UI";
import { TimetableBlockItem } from "../TimetableBlockItem";

export const TimetableBlockWeek: React.FC<TimetableBlockWeekProps> = (props: TimetableBlockWeekProps) => {
    return (
        <ScrollArea scrollbarSize={10} scrollHideDelay={0} w="100%">
            {/* <Box className={classes.main} mt="xs">
                <Stepper active={0} my="lg" orientation="vertical">
                    <Stepper.Step label={
                        <Box>
                            <Text>9:00</Text>
                            <Text>10:30</Text>
                        </Box>
                    } />
                    <Stepper.Step label="9:00" />
                    <Stepper.Step label="9:00" />
                    <Stepper.Step label="9:00" />
                    <Stepper.Step label="9:00" />
                    <Stepper.Step label="9:00" />
                </Stepper> 
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
                            <TimetableBlockItem type="" subject="Свободный день" teacher="" cabinet="" time="" />
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            <TimetableBlockItem type="Практика" subject="Экономика программной инженерии" teacher="Ткач Е. С." cabinet="2 корпус, 304" time="16:40-18:10" />
                            <TimetableBlockItem type="Практика" subject="Экономика программной инженерии" teacher="Ткач Е. С." cabinet="2 корпус, 132" time="18:20-19:50" />
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            <TimetableBlockItem type="Лекция" subject="Управление ИТ-проектами и жизненным циклом ПО" teacher="" cabinet="" time="18:20-19:50" />
                            <TimetableBlockItem type="Практика" subject="Управление ИТ-проектами и жизненным циклом ПО" teacher="" cabinet="" time="19:55-21:25" />
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            <TimetableBlockItem type="Лекция" subject="Анализ данных" teacher="Алюков С. В." cabinet="1 корпус, А-13" time="16:40-18:10" />
                            <TimetableBlockItem type="Практика" subject="Анализ данных" teacher="Алюков С. В." cabinet="1 корпус, 132Б" time="18:20-19:50" />
                            <TimetableBlockItem type="Практика" subject="Базы и хранилища данных" teacher="Нагуманова А. В." cabinet="1 корпус, 132" time="19:55-21:25" />
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            <TimetableBlockItem type="Лекция" subject="Прикладная и оздоровительная физическая культура" teacher="Ярушин С. А." cabinet="" time="13:15-14:45" />
                            <TimetableBlockItem type="Лекция" subject="Разработка интернет-приложений" teacher="Павличенков Е. А." cabinet="1 корпус, 132" time="18:20-19:50" />
                            <TimetableBlockItem type="Практика" subject="Разработка интернет-приложений" teacher="Павличенков Е. А." cabinet="1 корпус, 132" time="19:55-21:25" />
                        </Box>
                        <Box className={classes.timetable_day_item}>
                            <TimetableBlockItem type="Практика" subject="Тестирование программного обеспечения" teacher="Булавин Р. С." cabinet="1 корпус, 132" time="9:40-11:10" />
                            <TimetableBlockItem type="Практика" subject="Тестирование программного обеспечения" teacher="Булавин Р. С." cabinet="1 корпус, 132" time="11:20-12:50" />
                            <TimetableBlockItem type="Лекция" subject="Тестирование программного обеспечения" teacher="Булавин Р. С." cabinet="" time="16:40-18:10" />
                        </Box>
                    </Box>
                </Box>
            </Box> */}
        </ScrollArea>
    );
}