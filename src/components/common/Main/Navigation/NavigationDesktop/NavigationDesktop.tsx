import React from "react";
import { NavigationDesktopProps } from "./NavigationDesktop.types";
import classes from "./NavigationDesktop.module.css";

import { Box, Stack, UnstyledButton } from "@mantine/core";
import { Text } from "@components/UI";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { useNavigate } from "react-router-dom";

import { ReactSVG } from "react-svg";
import expandIcon from "@assets/images/icons/w200/expand_more_fill.svg";

const NavigationDesktopComponent: React.FC<NavigationDesktopProps> = (props: NavigationDesktopProps) => {
    const { navigationStore } = useStores();
    const navigation = useNavigate();

    const handleButtonClick = (index: number, url: string) => {
        navigationStore.handleClickLink(index, () => navigation(url));
    };

    return (
        <Box className={classes.main_container}>
            <Box className={classes.title_block}>
                <Text size="medium" weight="medium" color="text-secondary" mb={8}>Меню</Text>
            </Box>
            <Stack gap={2}>
                {navigationStore.services.map((button, index) => (
                    <UnstyledButton
                        key={index}
                        className={classes.button_menu}
                        onClick={() => handleButtonClick(index, `/${button.url}`)}
                        data-active={index === navigationStore.active}
                    >
                        <Box className={classes.button_content} p={8}>
                            <Box className={classes.button_left}>
                                <ReactSVG className={classes.icon} src={button.icon as string} />
                                <Text size="small" weight="medium" ml={6}>
                                    {button.label}
                                </Text>
                            </Box>

                            <Box className={classes.button_right}>
                                <ReactSVG className={classes.icon_expand} src={expandIcon} />
                            </Box>
                        </Box>
                    </UnstyledButton>
                ))}
            </Stack>
        </Box>
    );
};

export const NavigationDesktop = observer(NavigationDesktopComponent);