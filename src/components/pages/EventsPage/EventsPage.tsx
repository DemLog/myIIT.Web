import React, { useEffect, useState } from "react";
import { TimetablePageProps } from "./EventsPage.types";
import classes from "./EventsPage.module.css";

import { Box, Button } from "@mantine/core";
import { useDisclosure, useDocumentTitle, useMediaQuery } from "@mantine/hooks";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

import { XBlock, XMasonry } from "react-xmasonry";
import { Block, TitleBlock, Text, Modal } from "@components/UI";

import calendarIcon from "@assets/images/icons/w400/calendar_clock_fill.svg";
import { TimetableBlock } from "@components/Timetable";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

const EventsPageComponent: React.FC<TimetablePageProps> = (props: TimetablePageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const [openedSPModal, { open: openSPModal, close: closeSPModal }] = useDisclosure(false);

    const [active, setActive] = useState([false, false]);
    const [activeNumber, setActiveNumber] = useState(0);

    const { navigationStore } = useStores();

    useDocumentTitle("Мероприятия - myIIT");
    useEffect(() => {
        navigationStore.setNamePage("Мероприятия");
    }, []);

    return (
        <Box className={classes.main_container}>
            <Modal
                opened={openedSPModal}
                onClose={closeSPModal}
                title="Подтверждение действия"
                withCloseButton
                buttons={[
                    {
                        text: "Пойду",
                        variant: "filled",
                        color: "primary",
                        onClick: () => {
                            setActive(prevState => [activeNumber === 0 ? true : prevState[activeNumber], activeNumber === 1 ? true : prevState[activeNumber]]);
                            closeSPModal();
                        }
                    },
                    {
                        text: "Отменить",
                        variant: "filled",
                        color: "gray",
                        onClick: closeSPModal
                    }
                ]}
            >
                <Text>Вы действительно хотите пойти?</Text>
            </Modal>
            <Box className={classes.content}>
                <Box className={classes.content_box}>
                    <XMasonry center={false} targetBlockWidth={matchesPC ? 237 : 267} smartUpdateCeil={1000}>
                        <XBlock width={3}>
                            <Box className={classes.timetable_item} mb={16}>
                                <Block>
                                    <Box className={classes.item}>
                                        <Box className={classes.data} p="xs">
                                            <Text weight="medium" size="large" color="white">14 декабря</Text>
                                        </Box>
                                        <Box className={classes.item_content} p="xs" mt={6}>
                                            <Box className={classes.time}>
                                                <Text weight="medium" size="large">16:00</Text>
                                            </Box>
                                            <Box className={classes.name} ml={4}>
                                                <Text weight="medium" size="medium">Тестовое мероприятие 1</Text>
                                                <Text weight="regular" size="small" color={getStyleColor("text-secondary")}>Описание мероприятия, очень интересное</Text>
                                            </Box>
                                            <Box className={classes.buttons}>
                                                <Button size="sx-compact" radius="lg" disabled={active[0]} color={getStyleColor("accept")} onClick={() => {
                                                    setActiveNumber(0);
                                                    openSPModal();
                                                }}>{active[0] ? "Вы идёте" : "Пойду"}</Button>
                                                <Button size="sx-compact" radius="lg" color={getStyleColor("disabled")} onClick={() => setActive(prevState => [false, prevState[1]])}>Не пойду</Button>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box className={classes.item} mt="md">
                                        <Box className={classes.data} p="xs">
                                            <Text weight="medium" size="large" color="white">15 декабря</Text>
                                        </Box>
                                        <Box className={classes.item_content} p="xs" mt={6}>
                                            <Box className={classes.time}>
                                                <Text weight="medium" size="large">12:00</Text>
                                            </Box>
                                            <Box className={classes.name} ml={4}>
                                                <Text weight="medium" size="medium">Тестовое мероприятие 2</Text>
                                                <Text weight="regular" size="small" color={getStyleColor("text-secondary")}>Описание мероприятия, очень интересное</Text>
                                            </Box>
                                            <Box className={classes.buttons}>
                                                <Button size="sx-compact" radius="lg" disabled={active[1]} color={getStyleColor("accept")} onClick={openSPModal}>{active[1] ? "Вы идёте" : "Пойду"}</Button>
                                                <Button size="sx-compact" radius="lg" color={getStyleColor("disabled")} onClick={() => setActive(prevState => [prevState[0], false])}>Не пойду</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Block>
                            </Box>
                        </XBlock>
                    </XMasonry>
                </Box>
            </Box>
        </Box>
    );
};

export const EventsPage = observer(EventsPageComponent);