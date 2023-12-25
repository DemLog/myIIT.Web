import React, { Fragment } from "react";
import { TimetableBlockDayProps } from "./TimetableBlockDay.types";
import classes from "./TimetableBlockDay.module.css";

import { Text } from "@components/UI";
import { Box, ScrollArea, Stepper } from "@mantine/core";
import { TimetableBlockItem } from "../TimetableBlockItem";

export const TimetableBlockDay: React.FC<TimetableBlockDayProps> = (props: TimetableBlockDayProps) => {
    return (
        <ScrollArea scrollbarSize={10} scrollHideDelay={0}>
            {props.data && <Fragment>
                <Box className={classes.timetable_content} mt="xs">
                    {props.data.map(p => <TimetableBlockItem type={p.subject.type.toString()} subject={p.subject.title} teacher={p.lecture.map(t => `${t.lastName} ${t.firstName[0]}. ${t.patronymic[0]}.`).toString()} cabinet={p.cabinet} />)}
                </Box>
                <Stepper active={0} px="4%" wrap my="xs">
                    {props.data.map(t => <Stepper.Step step={t.time.number} label={
                        <Box>
                            <Text>{new Date(t.time.startTime).getHours()}:{new Date(t.time.startTime).getMinutes()}</Text>
                            <Text>{new Date(t.time.endTime).getHours()}:{new Date(t.time.endTime).getMinutes()}</Text>
                        </Box>
                    } />)}
                </Stepper>
            </Fragment>
            }
        </ScrollArea >
    );
}