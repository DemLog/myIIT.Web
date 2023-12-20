import React, { Fragment, useState } from "react";
import { TimetableBlockProps } from "./TimetableBlock.types";
import classes from "./TimetableBlock.module.css";

import { Block, Text } from "@components/UI";
import { Box, Divider } from "@mantine/core";
import { CarouselTabType } from "@components/UI/CarouselTabs/CarouselTabs.types";
import { CarouselTabs, CarouselTabsBlock } from "@components/UI/CarouselTabs";
import { TimetableBlockDay } from "../TimetableBlockDay";
import { TimetableBlockWeek } from "../TimetableBlockWeek";
import { useMediaQuery } from "@mantine/hooks";

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

export const TimetableBlock: React.FC<TimetableBlockProps> = (props: TimetableBlockProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');
    const [activeTab, setActiveTab] = useState<string>("today");

    return (
        <Block
            title={matchesMobile ? undefined : "Расписание ПрИ-302"}
        >
            <Box className={classes.content}>
                <Box className={classes.header}>
                    <Box className={classes.tabs_box}>
                        <CarouselTabs tabs={tabsList} activeTab={activeTab} onTabChange={setActiveTab} fullWidth={!matchesMobile} />
                    </Box>
                    {!matchesMobile && activeTab !== "week" && <Box className={classes.info_box}>
                        <Text weight="medium">{activeTab === "today" ? "Среда, 20 декабря" : "Четверг, 21 декабря"}</Text>
                    </Box>}
                    <Divider mt={32} />
                </Box>
                <CarouselTabsBlock activeTab={activeTab}>
                    [
                    {<Box value="today">
                        <TimetableBlockDay joke={false} />
                    </Box>},
                    {<Box value="tomorrow">
                        <TimetableBlockDay joke={true} />
                    </Box>},
                    {<Box value="week">
                        <TimetableBlockWeek />
                    </Box>}
                    ]
                </CarouselTabsBlock>
                <Box className={classes.footer} mt="xs">
                    <Box className={classes.timetable_info} p={6} mr="xs">
                        <Text>Первая неделя</Text>
                    </Box>
                    {activeTab !== "week" && <Box className={classes.timetable_info} p={6}>
                        <Text>{activeTab === "today" ? "Пары отсутсвуют" : "Пары отсутсвуют"}</Text>
                    </Box>}
                </Box>
            </Box>
        </Block>
    );
}