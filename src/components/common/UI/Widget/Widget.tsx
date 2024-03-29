import React from "react";
import { WidgetProps } from "./Widget.types";
import classes from "./Widget.module.css";

import { Box } from "@mantine/core";
import { Text } from "@components/UI";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";
import { useMediaQuery } from "@mantine/hooks";

export const Widget: React.FC<WidgetProps> = (props: WidgetProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');
    const {
        variant = "light",
        backgroundColor = "linear-gradient(180deg, rgba(0,163,255,1) 0%, rgba(0,255,209,0.039279037647033) 100%)",
        noneTopBorder = false
    } = props;

    const renderTitleBlock = () => {
        if (props.title || props.rightSection) {
            return (
                <Box className={classes.title_block} data-variant={variant} data-mobile={matchesMobile} p={8} mb="sm">
                    {props.title && (
                        <Box className={classes.title_box}>
                            <Text size={matchesMobile ? "medium" : "large"} weight="medium" color={getStyleColor(matchesMobile ? "text-primary" : "white")}>{props.title}</Text>
                        </Box>
                    )}
                    {props.rightSection && (
                        <Box className={classes.right_section_box}>{props.rightSection}</Box>
                    )}
                </Box>
            );
        }
        return null;
    };

    return (
        <Box className={classes.main} data-border={noneTopBorder} style={{ background: backgroundColor }} py="xs" px="md">
            {renderTitleBlock()}
            <Box className={classes.content_block}>
                {props.children}
            </Box>
        </Box>
    );
}