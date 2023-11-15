import React, {useEffect, useRef} from "react";
import {CarouselTabsItemProps} from "./props";
import classes from "./CarouselTabsItem.module.css";
import {Box, Image, Text} from "@mantine/core";

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
                backgroundColor: props.active ? '#5B6CF0' : '#E8E8E8',
                flex: `0 0 ${props.width}%`,
            }}
            onClick={handleClick}
            p={8}
        >
            {props.icon && <Image mr={6} h={24} w="auto" fit="contain" src={props.icon}/>}
            <Text fw={600} c={props.active ? "white" : "#565656"} size="sm">{props.label}</Text>
        </Box>
    );
};