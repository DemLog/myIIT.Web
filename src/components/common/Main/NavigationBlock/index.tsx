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

    const [activeLink, setActiveLink] = useState(navigationStore.getActive());

    return (
        <Box className={classes.main_container} p="md">
            <NavigationBlockList active={activeLink} setActive={setActiveLink}/>
            <Divider my="sm" />
            <ServicesBlock setActive={setActiveLink}/>
        </Box>
    );
};

export const NavigationBlock = observer(NavigationBlockComponent);