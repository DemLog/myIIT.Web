import React from "react";
import {ServicesBlockProps} from "./props";
import classes from "./ServicesBlock.module.css";

import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

import {ActionIcon, Box, Grid, Image, Text} from "@mantine/core";
import {useNavigate} from "react-router-dom";

const ServicesBlockComponent: React.FC<ServicesBlockProps> = (props: ServicesBlockProps) => {
    const {navigationStore} = useStores();
    const navigate = useNavigate();

    const servicesList = navigationStore.getLinksMenu().slice(5, 13);

    return (
        <Box className={classes.main_container}>
            <Grid className={classes.grid_container} gutter="xs">
                {servicesList.map((value, idx) =>
                    <Grid.Col span={3}>
                        <ActionIcon className={classes.grid_element} style={{background: value.bgColor}} size="100%"
                                    radius="xl"
                                    onClick={() => navigationStore.handleClickLink(idx + 5, () => {
                                        props.setActive(idx + 5)
                                        navigate(`/${value.url}`)
                                    })}>
                            <Image className={classes.grid_element_icon} h={42} w="auto" fit="contain"
                                   src={value.icon}/>
                        </ActionIcon>
                    </Grid.Col>
                )}
            </Grid>
            <Box className={classes.all_services_link_block} mt="xs">
                <Text className={classes.open_all_services_link} component="a" href="#" fw={300} td="underline">Все
                    сервисы</Text>
            </Box>
        </Box>
    );
};

export const ServicesBlock = observer(ServicesBlockComponent);