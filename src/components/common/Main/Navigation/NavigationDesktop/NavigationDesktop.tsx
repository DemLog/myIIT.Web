import React, { useState } from "react";
import { NavigationDesktopProps } from "./NavigationDesktop.types";
import classes from "./NavigationDesktop.module.css";

import { Box, Button, Stack, UnstyledButton } from "@mantine/core";
import { Text } from "@components/UI";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";
import { ReactSVG } from "react-svg";

import dashboardIcon from "@assets/images/icons/w400/dashboard_fill.svg";
import newspaperIcon from "@assets/images/icons/w400/newspaper_fill.svg";
import scheduleIcon from "@assets/images/icons/w400/schedule_fill.svg";
import calendarIcon from "@assets/images/icons/w400/calendar_clock_fill.svg";
import mailIcon from "@assets/images/icons/w400/mail_fill.svg";

export const NavigationDesktop: React.FC<NavigationDesktopProps> = (props: NavigationDesktopProps) => {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index: number) => {
        setActiveButton(index);
    };

    const buttons = [
        { icon: dashboardIcon, text: "Дашборд" },
        { icon: newspaperIcon, text: "Новости" },
        { icon: scheduleIcon, text: "Расписание" },
        { icon: calendarIcon, text: "Мероприятия" },
        { icon: mailIcon, text: "Сообщения" },
    ];

    return (
        <Box className={classes.main_container} p="sm">
            <Stack gap={2}>
                {buttons.map((button, index) => (
                    <UnstyledButton
                        key={index}
                        className={classes.button_menu}
                        onClick={() => handleButtonClick(index)}
                        data-active={index === activeButton}
                    >
                        <Box className={classes.button_content} p={8}>
                            <ReactSVG className={classes.icon} src={button.icon} />
                            <Text size="medium" weight="medium">
                                {button.text}
                            </Text>
                        </Box>
                    </UnstyledButton>
                ))}
            </Stack>
        </Box>
    );
};
