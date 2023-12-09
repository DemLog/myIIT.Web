import React from "react";
import {LoginFormProps} from "./LoginForm.types";
import classes from "./LoginForm.module.css";

import {Button, Card, InputPassword, InputText, Text} from "@components/UI";
import {Box, Image, Stack} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import iitMoodleIcon from "@assets/images/icons/black-iit.png";

export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    return (
        <Box className={classes.main}>
            <Card py="md" px="lg" w="100%">
                <Box className={classes.title_block}>
                    <Text size={matchesMobile ? "large" : "extra-large"} weight="medium" color="text-primary" ta="center">Авторизация</Text>
                </Box>
                <Stack className={classes.input_block} gap="xs" mt="lg">
                    <InputText placeholder="Логин Moodle" variant="default" size={matchesMobile ? "medium" : "large"} />
                    <InputPassword placeholder="Пароль" variant="default" size={matchesMobile ? "medium" : "large"} />
                </Stack>
                <Box className={classes.iit_moodle_block} mt="xs">
                    <Image src={iitMoodleIcon} h="18px" w="auto" fit="contain"/>
                    <Text size="extra-small" weight="light" fs="italic" color="black">Вход происходит через ИИТ Moodle</Text>
                </Box>
                <Box className={classes.button_block} mt="lg">
                    <Button text="Войти" color="primary" size="extra-large" variant="filled" fullWidth />
                </Box>
            </Card>
        </Box>
    );
};
