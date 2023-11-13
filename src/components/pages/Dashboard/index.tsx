import React, {Fragment, useEffect, useState} from "react";
import {DashboardPageProps} from "./props";
import classes from "./DashboardPage.module.css";

import {Box} from "@mantine/core";
import {useDisclosure, useDocumentTitle, useMediaQuery} from "@mantine/hooks";
import {XMasonry, XBlock} from "react-xmasonry";

import {DashboardWidgetWelcome} from "@components/Dashboard/DashboardWidget/DashboardWidgetWelcome";
import {DashboardWidget} from "@components/Dashboard/DashboardWidget";

import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

import {DashboardWidgetUserLevel} from "@components/Dashboard/DashboardWidget/DashboardWidgetUserLevel";
import {DashboardWidgetServices} from "@components/Dashboard/DashboardWidget/DashboardWidgetServices";

const DashboardPageComponent: React.FC<DashboardPageProps> = (props: DashboardPageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const [loaderVisible, {toggle: loaderToggle}] = useDisclosure(false);

    const {navigationStore} = useStores();

    useDocumentTitle("Дашборд - myIIT");

    useEffect(() => {
        navigationStore.setNamePage("Дашборд");
        setTimeout(() => loaderToggle(), 100);
    }, []);

    return (
        <Box className={classes.main_container}>
            {loaderVisible && <Fragment>{matchesMobile &&
                <Box className={classes.mobile_subheader} mt={-10}>
                    <DashboardWidgetWelcome/>
                </Box>
            }

                <Box className={classes.content} mt={matchesMobile ? "xs" : 0} mb={matchesMobile ? 62 : 0}>
                    <XMasonry center={false} maxColumns={10} targetBlockWidth={400} smartUpdateCeil={1000}>
                        {matchesMobile &&
                            <XBlock width={4}>
                                <DashboardWidget
                                    background="white">
                                    <DashboardWidgetUserLevel/>
                                </DashboardWidget>
                            </XBlock>
                        }

                        {matchesMobile &&
                            <XBlock width={4}>
                                <DashboardWidget
                                    header="Сервисы"
                                    background="white">
                                    <DashboardWidgetServices/>
                                </DashboardWidget>
                            </XBlock>
                        }

                        {!matchesMobile &&
                            <XBlock width={3}>
                                <DashboardWidget
                                    background="linear-gradient(180deg, rgba(0,133,255,1) 0%, rgba(0,255,209,0.3) 100%)">
                                    <DashboardWidgetWelcome/>
                                </DashboardWidget>
                            </XBlock>
                        }

                        <XBlock width={1}>
                            <DashboardWidget
                                background="linear-gradient(180deg, rgba(250,255,0,1) 0%, rgba(204,0,255,0.15) 100%)"
                                header="Уведомления" headerNegativeColor>
                                <Box h={200}/>
                            </DashboardWidget>
                        </XBlock>

                        <XBlock width={1}>
                            <DashboardWidget
                                background="linear-gradient(180deg, rgba(206,84,84,0.51) 0%, rgba(159,228,46,0.58) 100%)"
                                header={{leftSide: "Расписание", rightSide: "Вт, 20 ноября"}} headerNegativeColor>
                                <Box h={340}/>
                            </DashboardWidget>
                        </XBlock>

                        <XBlock width={1}>
                            <DashboardWidget
                                background="linear-gradient(180deg, rgba(0,163,255,1) 0%, rgba(36,0,255,0.15) 100%)"
                                header="Ближайшие события">
                                <Box h={180}/>
                            </DashboardWidget>
                        </XBlock>

                        <XBlock width={1}>
                            <DashboardWidget
                                background="linear-gradient(180deg, rgba(255,46,0,1) 0%, rgba(255,0,184,0.15) 100%)"
                                header="Статистика">
                                <Box h={200}/>
                            </DashboardWidget>
                        </XBlock>
                    </XMasonry>
                </Box> </Fragment>
            }
        </Box>
    );
};

export const DashboardPage = observer(DashboardPageComponent);