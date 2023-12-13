import React, { Fragment, useState } from "react";
import { TimetableBlockItemProps } from "./TimetableBlockItem.types";
import classes from "./TimetableBlockItem.module.css";

import { Block, Text } from "@components/UI";
import { Badge, Box } from "@mantine/core";
import { ReactSVG } from "react-svg";
import personFillIcon from "@assets/images/icons/w200/person_fill.svg";
import exploreFillIcon from "@assets/images/icons/w200/explore_fill.svg";
import scheduleIcon from "@assets/images/icons/w200/schedule_fill.svg";

export const TimetableBlockItem: React.FC<TimetableBlockItemProps> = (props: TimetableBlockItemProps) => {
    return (
        <Box className={classes.main} p="xs">
            <Box className={classes.header_block}>
                <Badge>{props.type}</Badge>
            </Box>
            <Box className={classes.content} mt="xs">
                <Box className={classes.subject_box}>
                    <Text size="large" weight="medium" lineClamp={3}>{props.subject}</Text>
                </Box>
                <Box className={classes.teacher_box} mt={6}>
                    <Box className={classes.teacher_title}>
                        <ReactSVG className={classes.icon} src={personFillIcon} />
                        <Text size="medium" weight="medium">Преподаватель:</Text>
                    </Box>
                    <Text ml={24}>{props.teacher}</Text>
                </Box>
                <Box className={classes.cabinet_box} mt={6}>
                    <Box className={classes.teacher_title}>
                        <ReactSVG className={classes.icon} src={exploreFillIcon} />
                        <Text size="medium" weight="medium">Место проведения:</Text>
                    </Box>
                    <Text ml={24}>{props.cabinet}</Text>
                </Box>
                {props.time &&
                    <Box className={classes.time_box} mt={6}>
                        <Box className={classes.teacher_title}>
                            <ReactSVG className={classes.icon} src={scheduleIcon} />
                            <Text size="medium" weight="medium">Время:</Text>
                        </Box>
                        <Text ml={24}>{props.time}</Text>
                    </Box>
                }
            </Box>
        </Box>
    );
}