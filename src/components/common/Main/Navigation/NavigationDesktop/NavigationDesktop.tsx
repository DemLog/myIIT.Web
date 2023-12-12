import React from "react";
import { NavigationDesktopProps } from "./NavigationDesktop.types";
import classes from "./NavigationDesktop.module.css";

import { Box, Stack, UnstyledButton } from "@mantine/core";
import { Text } from "@components/UI";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { useNavigate } from "react-router-dom";

import { ReactSVG } from "react-svg";

const NavigationDesktopComponent: React.FC<NavigationDesktopProps> = (props: NavigationDesktopProps) => {
    const { navigationStore } = useStores();
    const navigation = useNavigate();

    const handleButtonClick = (index: number, url: string) => {
        navigationStore.handleClickLink(index, () => navigation(url));
    };

    return (
        <Box className={classes.main_container} p="sm">
            <Stack gap={2}>
                {navigationStore.services.map((button, index) => (
                    <UnstyledButton
                        key={index}
                        className={classes.button_menu}
                        onClick={() => handleButtonClick(index, `/${button.url}`)}
                        data-active={index === navigationStore.active}
                    >
                        <Box className={classes.button_content} p={8}>
                            <ReactSVG className={classes.icon} src={button.icon as string} />
                            <Text size="medium" weight="medium">
                                {button.label}
                            </Text>
                        </Box>
                    </UnstyledButton>
                ))}
            </Stack>
        </Box>
    );
};

export const NavigationDesktop = observer(NavigationDesktopComponent);