import React, { useState } from "react";
import { NavigationTabletProps } from "./NavigationTablet.types";
import classes from "./NavigationTablet.module.css";

import { Box, Stack, UnstyledButton } from "@mantine/core";
import { Text } from "@components/UI";
import { ReactSVG } from "react-svg";

import dashboardIcon from "@assets/images/icons/w400/dashboard_fill.svg";
import newspaperIcon from "@assets/images/icons/w400/newspaper_fill.svg";
import scheduleIcon from "@assets/images/icons/w400/schedule_fill.svg";
import calendarIcon from "@assets/images/icons/w400/calendar_clock_fill.svg";
import mailIcon from "@assets/images/icons/w400/mail_fill.svg";

export const NavigationTablet: React.FC<NavigationTabletProps> = (props: NavigationTabletProps) => {
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
        <Box className={classes.main_container} m={7}>
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
                            {index === activeButton && <Text size="10px" weight="medium" mt={-6} lts="-1px">
                                {button.text}
                            </Text>}
                        </Box>
                    </UnstyledButton>
                ))}
            </Stack>
        </Box>
    );
};
