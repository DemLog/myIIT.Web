import React, {useEffect, useState} from "react";
import {NavigationBlockTabletProps} from "./props";
import classes from "./NavigationBlockTablet.module.css";

import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

import {ActionIcon, Image, Stack, Text} from "@mantine/core";

const NavigationBlockTabletComponent: React.FC<NavigationBlockTabletProps> = (props: NavigationBlockTabletProps) => {
    const {navigationStore} = useStores();

    const mainServicesList = navigationStore.getLinksMenu().slice(0, 5);
    const [activeLink, setActiveLink] = useState(navigationStore.getActive());

    useEffect(() => {
    }, [activeLink]);

    return (
        <Stack className={classes.main_container} align="center" gap={40} py="xl">
            {mainServicesList.map((value, idx) =>
                <ActionIcon className={classes.nav_link} variant="transparent" color="#5B6CF0"
                            onClick={() => navigationStore.handleClickLink(idx, () => setActiveLink(idx))}>
                    <Image className={activeLink === idx ? classes.nav_link_icon_active : classes.nav_link_icon}
                           src={value.icon} h={52} w="auto" fit="contain"/>
                    {activeLink === idx &&
                        <Text className={classes.nav_link_text} fw={600} size="xs">{value.label}</Text>}
                </ActionIcon>
            )}
        </Stack>
    );
};

export const NavigationBlockTablet = observer(NavigationBlockTabletComponent);