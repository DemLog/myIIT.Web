import React from "react";
import {CarouselTabsProps} from "./CarouselTabs.types";
import classes from "./CarouselTabs.module.css";

import {CarouselTabsItem} from "./CarouselTabsItem";

import {Box} from "@mantine/core";

export const CarouselTabs: React.FC<CarouselTabsProps> = (props: CarouselTabsProps) => {
    const totalTabs = props.tabs.length;
    const tabWidth = props.fullWidth ? (100 / totalTabs - 2) : (totalTabs === 2 ? 50 : 45);

    return (
        <Box className={classes.main_container}>
            {props.tabs.map((tab, index) => (
                <CarouselTabsItem
                    key={index}
                    value={tab.value}
                    label={tab.label}
                    icon={tab.icon}
                    active={tab.value === props.activeTab}
                    onTabChange={props.onTabChange}
                    width={tabWidth}
                />
            ))}
        </Box>
    )
};