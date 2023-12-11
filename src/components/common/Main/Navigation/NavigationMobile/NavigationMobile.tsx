import React, { useState } from "react";
import { NavigationMobileProps } from "./NavigationMobile.types";
import classes from "./NavigationMobile.module.css";

import { Box, UnstyledButton } from "@mantine/core";
import { Text } from "@components/UI";

import { ReactSVG } from "react-svg";
import dashboardIcon from "@assets/images/icons/w400/dashboard_fill.svg";
import newspaperIcon from "@assets/images/icons/w400/newspaper_fill.svg";
import scheduleIcon from "@assets/images/icons/w400/schedule_fill.svg";
import calendarIcon from "@assets/images/icons/w400/calendar_clock_fill.svg";
import mailIcon from "@assets/images/icons/w400/mail_fill.svg";

export const NavigationMobile: React.FC<NavigationMobileProps> = (props: NavigationMobileProps) => {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index: number) => {
        setActiveButton(index);
    };

    const buttons = [
        { icon: newspaperIcon, text: "Новости" },
        { icon: scheduleIcon, text: "Расписание" },
        { icon: dashboardIcon, text: "Дашборд", centered: true },
        { icon: calendarIcon, text: "Мероприятия" },
        { icon: mailIcon, text: "Сообщения" },
    ];

    return (
        <Box className={classes.main_container} px="sm" py="xs">
            <Box className={classes.buttons_group}>
                {buttons.map((button, index) => (
                    <UnstyledButton
                        className={classes.button_menu}
                        onClick={() => handleButtonClick(index)}
                        data-active={index === activeButton}
                        data-centered={button.centered}
                        p={3}
                    >
                        <Box className={classes.button_content}>
                            <ReactSVG className={classes.icon} src={button.icon} />
                        </Box>
                        {index === activeButton && !button.centered && (
                            <Box className={classes.active_text}>
                                <Text size="10px" weight="medium" lts={-1}>
                                    {button.text}
                                </Text>
                            </Box>
                        )}
                    </UnstyledButton>
                ))}
            </Box>
        </Box>
    );
};
