import React, { useEffect, useRef } from "react";
import { CarouselTabsItemProps } from "./CarouselTabsItem.types";
import classes from "./CarouselTabsItem.module.css";

import { Box } from "@mantine/core";
import { Text } from "@components/UI";

import { ReactSVG } from "react-svg";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

export const CarouselTabsItem: React.FC<CarouselTabsItemProps> = (props: CarouselTabsItemProps) => {
    const tabRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        props.onTabChange(props.value);
    };

    useEffect(() => {
        if (props.active && tabRef.current) {
            tabRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [props.active]);

    return (
        <Box
            className={classes.main_container}
            ref={tabRef}
            style={{
                flex: `0 0 ${props.width}%`
            }}
            onClick={handleClick}
            data-active={props.active}
            p={6}
        >
            {props.icon && <Box className={classes.icon_box}>
                <ReactSVG className={classes.icon} src={props.icon} />
            </Box>}
            <Box className={classes.title_box}>
                <Text size="extra-small" weight="medium" color={getStyleColor(props.active ? "white" : "text-primary")}>{props.label}</Text>
            </Box>
        </Box>
    );
};