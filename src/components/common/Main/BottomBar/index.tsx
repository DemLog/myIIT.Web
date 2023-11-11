import React, {Fragment, useEffect, useState} from "react";
import {BottomBarProps} from "./props";
import classes from "./BottomBar.module.css";

import {observer} from "mobx-react";

import {ActionIcon, Box, Group, Image, Text} from "@mantine/core";
import {useStores} from "@core/hooks";
import {useNavigate} from "react-router-dom";
import {IServiceLink} from "@models/service/IServiceLink";

const BottomBarComponent: React.FC<BottomBarProps> = (props: BottomBarProps) => {
    const {navigationStore} = useStores();
    const navigate = useNavigate();

    const mainServicesList = navigationStore.getLinksMenu().slice(1, 5);
    const dashboardService: IServiceLink = navigationStore.getLinkFromIndex(0) as IServiceLink;

    const [activeLink, setActiveLink] = useState(navigationStore.getActive());

    useEffect(() => {
    }, []);

    return (
        <Box className={classes.main_container} px="xl" py={3}>
            {mainServicesList.map((value, idx) =>
                <Fragment>
                    {idx === 2 &&
                        <Box
                            className={activeLink === 0 ? `${classes.nav_link_dashboard} ${classes.nav_link_dashboard_active}` : classes.nav_link_dashboard}
                             onClick={() => navigationStore.handleClickLink(0, () => {
                            setActiveLink(0)
                            navigate(`/${dashboardService.url}`)
                        })}>
                            <ActionIcon className={classes.nav_link} variant="transparent" color="#5B6CF0">
                                <Image
                                    className={activeLink === 0 ? classes.nav_link_icon_active : classes.nav_link_dashboard_icon}
                                    src={dashboardService.icon} h={38} w="auto" fit="contain"/>
                            </ActionIcon>
                        </Box>
                    }
                    <ActionIcon className={classes.nav_link} variant="transparent" color="#5B6CF0"
                                onClick={() => navigationStore.handleClickLink(idx + 1, () => {
                                    setActiveLink(idx + 1)
                                    navigate(`/${value.url}`)
                                })}>
                        <Image className={activeLink === idx + 1 ? classes.nav_link_icon_active : classes.nav_link_icon}
                               src={value.icon} h={30} w="auto" fit="contain"/>
                        {activeLink === idx + 1 &&
                            <Text className={classes.nav_link_text} mt={-2} fw={600} size="xs">{value.label}</Text>}
                    </ActionIcon>
                </Fragment>
            )}
        </Box>
    );
};

export const BottomBar = observer(BottomBarComponent);