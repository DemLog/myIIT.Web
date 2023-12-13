import React, { useEffect, useState } from "react";
import { TimetablePageProps } from "./TimetablePage.types";
import classes from "./TimetablePage.module.css";

import { Box } from "@mantine/core";
import { useDocumentTitle, useMediaQuery } from "@mantine/hooks";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

import { XBlock, XMasonry } from "react-xmasonry";
import { TitleBlock } from "@components/UI";

import timetableIcon from "@assets/images/icons/w500/schedule.svg";
import { TimetableBlock } from "@components/Timetable";

const TimetablePageComponent: React.FC<TimetablePageProps> = (props: TimetablePageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const { navigationStore } = useStores();

    useDocumentTitle("Расписание - myIIT");
    useEffect(() => {
        navigationStore.setNamePage("Расписание");
    }, []);

    return (
        <Box className={classes.main_container}>
            <Box className={classes.content}>
                {!matchesMobile && <Box className={classes.header_block}>
                    <Box className={classes.title_block}>
                        <TitleBlock title="Расписание" icon={timetableIcon} />
                    </Box>
                </Box>}
                <Box className={classes.content_box} mt={matchesMobile ? "xs" : "md"}>
                    <XMasonry center={false} targetBlockWidth={matchesPC ? 237 : 267} smartUpdateCeil={1000}>
                    <XBlock width={3}>
                            <Box className={classes.timetable_item} mb={16}>
                                <TimetableBlock />
                            </Box>
                        </XBlock>
                    </XMasonry>
                </Box>
            </Box>
        </Box>
    );
};

export const TimetablePage = observer(TimetablePageComponent);