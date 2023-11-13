import React from "react";
import { DashboardWidgetHeaderTitleSide, DashboardWidgetProps } from "./props";
import classes from "./DashboardWidget.module.css";

import { Box, Text } from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

export const DashboardWidget: React.FC<DashboardWidgetProps> = (props: DashboardWidgetProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const colorBackgroundHeader = matchesMobile ? "unset" : props.headerNegativeColor ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.19)";

    const displayHeaderBlock = () => {
        if (!props.header) {
            return null;
        }

        if (typeof props.header === "string") {
            return (
                <Box className={classes.header_content} style={{ background: colorBackgroundHeader }} px="xs">
                    <Text fw={matchesMobile ? 400 : 500} c={matchesMobile ? "#525252" : "white"} size="xl">
                        {props.header}
                    </Text>
                </Box>
            );
        }

        if (typeof props.header === "object" && "leftSide" in props.header && "rightSide" in props.header) {
            const { leftSide, rightSide } = props.header as DashboardWidgetHeaderTitleSide;
            return (
                <Box className={classes.header_content} style={{ background: colorBackgroundHeader }} w="100%" px="xs">
                    <Text fw={matchesMobile ? 400 : 500} c={matchesMobile ? "#525252" : "white"} size="xl">
                        {leftSide}
                    </Text>
                    <Text fw={200} c={matchesMobile ? "#525252" : "white"} size="lg">
                        {rightSide}
                    </Text>
                </Box>
            );
        }

        return props.header;
    };

    return (
        <Box className={classes.main_container} px="md" mr={matchesMobile ? 0 : "xs"} mb="xs" style={{ background: matchesMobile ? "white" : props.background }}>
            {props.header && (
                <Box className={classes.header} my="sm">
                    {displayHeaderBlock()}
                </Box>
            )}
            <Box className={classes.content}>{props.children}</Box>
        </Box>
    );
};
