import React, {useEffect, useState} from "react";
import {NavigationBlockListProps} from "./props";
import classes from "./NavigationBlockList.module.css";

import {observer} from "mobx-react";

import {Box, Image, NavLink, Text} from "@mantine/core";
import {useStores} from "@core/hooks";

const NavigationBlockListComponent: React.FC<NavigationBlockListProps> = (props: NavigationBlockListProps) => {
    const {navigationStore} = useStores();

    const mainServicesList = navigationStore.getLinksMenu().slice(0, 5);

    useEffect(() => {
    }, [props.active]);

    return (
        <Box className={classes.main_container}>
            {mainServicesList.map((value, idx) =>
                <NavLink
                    className={classes.nav_link}
                    label={<Text fw={500} c={props.active === idx ? "white" : "#8B8B8B"}>{value.label}</Text>}
                    leftSection={<Image
                        className={props.active === idx ? classes.nav_link_icon_active : classes.nav_link_icon}
                        h={36} w="auto" fit="contain" src={value.icon}/>}
                    active={props.active === idx}
                    color="#5A84F1"
                    variant="filled"
                    p={6}
                    mb={6}
                    onClick={() => navigationStore.handleClickLink(idx, () => {
                        props.setActive(idx)
                    })}
                />
            )}
        </Box>
    );
};

export const NavigationBlockList = observer(NavigationBlockListComponent);