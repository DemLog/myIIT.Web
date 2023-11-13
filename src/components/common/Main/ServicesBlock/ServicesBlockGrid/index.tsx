import React from "react";
import {ServicesBlockGridProps} from "./props";
import classes from "./ServicesBlockGrid.module.css";

import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

import {ActionIcon, Grid, Image, Text} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import {useNavigate} from "react-router-dom";

const ServicesBlockGridComponent: React.FC<ServicesBlockGridProps> = (props: ServicesBlockGridProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const {navigationStore} = useStores();
    const navigate = useNavigate();

    const servicesList = navigationStore.getLinksMenu().slice(5, 13);

    return (
            <Grid className={classes.grid_container} gutter="xs" columns={20}>
                {servicesList.map((value, idx) =>
                    <Grid.Col className={classes.grid_element_box} span={matchesMobile ? 4 : 5}>
                        <ActionIcon className={classes.grid_element} style={{background: value.bgColor}}
                                    w="100%"
                                    h="auto"
                                    radius={99}
                                    onClick={() => navigationStore.handleClickLink(idx + 5, () => {
                                        navigate(`/${value.url}`)
                                    })}>
                            <Image className={classes.grid_element_icon} h={matchesMobile ? 32 : 42} w="auto" fit="contain"
                                   src={value.icon}/>
                        </ActionIcon>
                        {matchesMobile &&
                            <Text c="#5B5B5B" fw={400} size="md" mt={-4}>{value.label}</Text>
                        }
                    </Grid.Col>
                )}
            </Grid>
    );
};

export const ServicesBlockGrid = observer(ServicesBlockGridComponent);