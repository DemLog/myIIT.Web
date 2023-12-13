import React, { Fragment } from "react";
import { TimetableBlockDayProps } from "./TimetableBlockDay.types";
import classes from "./TimetableBlockDay.module.css";

import { Text } from "@components/UI";
import { Box, ScrollArea, Stepper } from "@mantine/core";
import { TimetableBlockItem } from "../TimetableBlockItem";

export const TimetableBlockDay: React.FC<TimetableBlockDayProps> = (props: TimetableBlockDayProps) => {
    return (
        <ScrollArea scrollbarSize={10} scrollHideDelay={0}>
            {!props.joke && <Fragment><Box className={classes.timetable_content} mt="xs">
                <TimetableBlockItem type="Лекция" subject="Управление ИТ-проектами и жизненным циклом ПО" teacher="" cabinet="" />
                <TimetableBlockItem type="Практика" subject="Управление ИТ-проектами и жизненным циклом ПО" teacher="" cabinet="" />
            </Box>
            <Stepper active={0} px="4%" wrap my="xs">
                <Stepper.Step label={
                    <Box>
                        <Text>18:20</Text>
                        <Text>19:50</Text>
                    </Box>
                } />
                <Stepper.Step label={
                    <Box>
                        <Text>19:55</Text>
                        <Text>21:25</Text>
                    </Box>
                } />
            </Stepper></Fragment>}

            {props.joke && <Fragment><Box className={classes.timetable_content} mt="xs">
                <TimetableBlockItem type="Лекция" subject="Анализ данных" teacher="Алюков С. В." cabinet="1 корпус, А-13" />
                            <TimetableBlockItem type="Практика" subject="Анализ данных" teacher="Алюков С. В." cabinet="1 корпус, 132Б" />
                            <TimetableBlockItem type="Практика" subject="Базы и хранилища данных" teacher="Нагуманова А. В." cabinet="1 корпус, 132" />
            </Box>
            <Stepper active={0} px="4%" wrap my="xs">
                <Stepper.Step label={
                    <Box>
                        <Text>16:40</Text>
                        <Text>18:10</Text>
                    </Box>
                } />
                <Stepper.Step label={
                    <Box>
                        <Text>18:20</Text>
                        <Text>19:50</Text>
                    </Box>
                } />
                <Stepper.Step label={
                    <Box>
                        <Text>19:55</Text>
                        <Text>21:25</Text>
                    </Box>
                } />
            </Stepper></Fragment>}
        </ScrollArea>
    );
}