import React from "react";
import { NavigationTabletProps } from "./NavigationTablet.types";
import classes from "./NavigationTablet.module.css";

import { Box, Stack, UnstyledButton } from "@mantine/core";
import { Text } from "@components/UI";
import { ReactSVG } from "react-svg";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { useNavigate } from "react-router-dom";

const NavigationTabletComponent: React.FC<NavigationTabletProps> = (props: NavigationTabletProps) => {
    const { navigationStore } = useStores();
    const navigation = useNavigate();

    const handleButtonClick = (index: number, url: string) => {
        navigationStore.handleClickLink(index, () => navigation(url));
    };

    return (
        <Box className={classes.main_container} m={7}>
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
                            {index === navigationStore.active && <Text size="10px" weight="medium" mt={-6} lts="-1px">
                                {button.label}
                            </Text>}
                        </Box>
                    </UnstyledButton>
                ))}
            </Stack>
        </Box>
    );
};

export const NavigationTablet = observer(NavigationTabletComponent);
