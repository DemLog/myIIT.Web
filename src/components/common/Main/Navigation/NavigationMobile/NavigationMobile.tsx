import React from "react";
import { NavigationMobileProps } from "./NavigationMobile.types";
import classes from "./NavigationMobile.module.css";

import { Box, UnstyledButton } from "@mantine/core";
import { Text } from "@components/UI";
import { ReactSVG } from "react-svg";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { useNavigate } from "react-router-dom";

export const NavigationMobileComponent: React.FC<NavigationMobileProps> = (props: NavigationMobileProps) => {
    const { navigationStore } = useStores();
    const navigation = useNavigate();

    const serviceList = [
        ...navigationStore.services.slice(1, 3),
        navigationStore.services[0],
        ...navigationStore.services.slice(3, 5),
    ];

    const handleButtonClick = (index: number, url: string) => {
        navigationStore.handleClickLink(index, () => navigation(url));
    };

    return (
        <Box className={classes.main_container} px="sm" py="xs">
            <Box className={classes.buttons_group}>
                {serviceList.map((button, index) => (
                    <UnstyledButton
                        key={index}
                        className={classes.button_menu}
                        onClick={() => handleButtonClick(index, `/${button.url}`)}
                        data-active={index === navigationStore.active}
                        data-centered={index === 2}
                        p={3}
                    >
                        <Box className={classes.button_content}>
                            <ReactSVG className={classes.icon} src={button.icon as string} />
                        </Box>
                        {index === navigationStore.active && index !== 2 && (
                            <Box className={classes.active_text}>
                                <Text size="10px" weight="medium" lts={-1}>
                                    {button.label}
                                </Text>
                            </Box>
                        )}
                    </UnstyledButton>
                ))}
            </Box>
        </Box>
    );
};

export const NavigationMobile = observer(NavigationMobileComponent);
