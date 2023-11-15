import React, {useState} from "react";
import {NavigationBlockProps} from "./props";
import classes from "./NavigationBlock.module.css";

import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

import {Box, Divider} from "@mantine/core";

import {NavigationBlockList} from "@components/Main/NavigationBlock/NavigationBlockList";
import {ServicesBlock} from "@components/Main/ServicesBlock";

const NavigationBlockComponent: React.FC<NavigationBlockProps> = (props: NavigationBlockProps) => {
    const {navigationStore} = useStores();

    return (
        <Box className={classes.main_container} p="md" onClick={() => props.closeDrawer ? props.closeDrawer() : null}>
            <NavigationBlockList/>
            <Divider my="sm"/>
            <ServicesBlock/>
        </Box>
    );
};

export const NavigationBlock = observer(NavigationBlockComponent);