import React from "react";
import {FooterLinksBlockProps} from "./props";
import classes from "./ServicesBlock.module.css";

import {Box, Group, Text} from "@mantine/core";

export const FooterLinksBlock: React.FC<FooterLinksBlockProps> = (props: FooterLinksBlockProps) => {

    return (
        <Box className={classes.main_container}>
            <Group className={classes.links_box}>
                <Text className={classes.footer_link} component="a" href="#" fw={300} td="underline">Регламент</Text>
                <Text className={classes.footer_link} component="a" href="#" fw={300} td="underline">О программе</Text>
                <Text className={classes.footer_link} component="a" href="#" fw={300} td="underline">Разработчикам</Text>
            </Group>
            <Box className={classes.copyright_box}>
                <Text fw={300}>Создано командой JSOL | myIIT © 2023</Text>
            </Box>
        </Box>
    );
};