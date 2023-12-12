import React, { useEffect } from "react";
import { DashboardPageProps } from "./DashboardPage.types";
import classes from "./DashboardPage.module.css";

import { Box } from "@mantine/core";
import { useDocumentTitle, useMediaQuery } from "@mantine/hooks";

import { XMasonry, XBlock } from "react-xmasonry";
import { WidgetTimetable, WidgetWelcome } from "@components/Widgets";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

const DashboardPageComponent: React.FC<DashboardPageProps> = (props: DashboardPageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const { navigationStore } = useStores();

    useDocumentTitle("Дашборд - myIIT");
    useEffect(() => {
        navigationStore.setNamePage("Дашборд");
    }, []);

    return (
        <Box className={classes.main_container}>
            <XMasonry center={false} targetBlockWidth={360} smartUpdateCeil={1000}>
                <XBlock width={3}>
                    <Box className={classes.dashboard_item} mx={matchesMobile ? 0 : 8} mb={16}>
                        <WidgetWelcome />
                    </Box>
                </XBlock>

                <XBlock width={1}>
                    <Box className={classes.dashboard_item} mx={matchesMobile ? 0 : 8} mb={16}>
                        <WidgetTimetable />
                    </Box>
                </XBlock>

                <XBlock width={1}>
                    <Box className={classes.dashboard_item} mx={matchesMobile ? 0 : 8} mb={16}>
                        <WidgetTimetable />
                    </Box>
                </XBlock>

                <XBlock width={1}>
                    <Box className={classes.dashboard_item} mx={matchesMobile ? 0 : 8} mb={16}>
                        <WidgetTimetable />
                    </Box>
                </XBlock>
            </XMasonry>
        </Box>
    );
};

export const DashboardPage = observer(DashboardPageComponent);