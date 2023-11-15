import React from "react";
import {ServicesBlockProps} from "./props";
import classes from "./ServicesBlock.module.css";

import {Box, Text} from "@mantine/core";
import {ServicesBlockGrid} from "@components/Main/ServicesBlock/ServicesBlockGrid";

export const ServicesBlock: React.FC<ServicesBlockProps> = (props: ServicesBlockProps) => {
    return (
        <Box className={classes.main_container}>
            <ServicesBlockGrid/>
            <Box className={classes.all_services_link_block} mt="xs">
                <Text className={classes.open_all_services_link} component="a" href="#" fw={300} td="underline">Все
                    сервисы</Text>
            </Box>
        </Box>
    );
};