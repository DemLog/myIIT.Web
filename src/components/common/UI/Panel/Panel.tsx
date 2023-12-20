import React, { useEffect, useState } from "react";
import { PanelProps } from "./Panel.types";
import classes from "./Panel.module.css";

import { ActionIcon, Box, Drawer, ScrollArea } from "@mantine/core";

import { Text } from "@components/UI";
import { useMediaQuery } from "@mantine/hooks";
import arrowBackIcon from "@assets/images/icons/w400/arrow_back.svg";
import { ReactSVG } from "react-svg";
import { getStyleColor } from "@styles/core/helpers";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

const PanelComponent: React.FC<PanelProps> = (props: PanelProps) => {
    const matchesMobile = useMediaQuery("(max-width: 579px)");
    const { navigationStore } = useStores();

    const handleClosePanel = async () => {
        navigationStore.handleBackPanel();
    };

    useEffect(() => {
        if (props.opened) {
            navigationStore.setActivePanel(true);
            props.title && navigationStore.setActivePanelName(props.title)
            navigationStore.setBackPanelFunc(props.onClose);
        }
    }, [props.opened]);

    return (
        <Drawer
            classNames={{ content: classes.drawer }}
            opened={props.opened}
            onClose={handleClosePanel}
            position="right"
            overlayProps={{ backgroundOpacity: 0, blur: 0 }}
            withCloseButton={false}
            size={matchesMobile ? "100%" : "560px"}
            zIndex={10}
        >
            <Box className={classes.header}>
                <ActionIcon
                    size="30px"
                    color={getStyleColor("background-dark")}
                    radius="xl"
                    onClick={handleClosePanel}
                >
                    <ReactSVG className={classes.icon} src={arrowBackIcon} />
                </ActionIcon>
                <Box className={classes.title_box} ml="md">
                    <Text size="large" weight="regular">
                        {props.title}
                    </Text>
                </Box>
            </Box>
            <Box className={classes.content} mt="xs" pb="xs">
                {props.children}
            </Box>
        </Drawer>
    );
};

export const Panel = observer(PanelComponent);
