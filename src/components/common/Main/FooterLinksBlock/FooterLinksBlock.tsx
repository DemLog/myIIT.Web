import React from "react";
import { FooterLinksBlockProps } from "./FooterLinksBlock.types";
import classes from "./FooterLinksBlock.module.css";

import { Box, Group } from "@mantine/core";
import { Text } from "@components/UI";

export const FooterLinksBlock: React.FC<FooterLinksBlockProps> = (props: FooterLinksBlockProps) => {

    return (
        <Box className={classes.main_container}>
            <Group className={classes.links_box}>
                <Text size="10px" weight="regular" color="text-secondary" td="underline" lts="-1">Регламент</Text>
                <Text size="10px" weight="regular" color="text-secondary" td="underline" lts="-1">О программе</Text>
                <Text size="10px" weight="regular" color="text-secondary" td="underline" lts="-1">Разработчикам</Text>
            </Group>
            <Box className={classes.copyright_box}>
                <Text size="10px" weight="regular" color="text-secondary">Создано командой JSOL | myIIT © 2023</Text>
            </Box>
        </Box>
    );
};