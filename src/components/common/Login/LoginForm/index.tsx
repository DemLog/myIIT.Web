import React, {Fragment} from "react";
import {LoginFormProps} from "./props";
import classes from "./LoginForm.module.css";

import {Box, Button, PasswordInput, Stack, Text, TextInput, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import {LoginFormAuthIITBlock} from "./LoginFormAuthIITBlock"

export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    return (
        <Fragment>
            <Box className={classes.main_container} px="lg" py="lg">
                <Title className={classes.form_title} fw={600} size={30}>Авторизация</Title>
                <Stack className={classes.form_input_block} mt="lg">
                    <TextInput
                        className={classes.form_input}
                        variant="filled"
                        size="md"
                        radius="lg"
                        placeholder="Логин Moodle"
                    />
                    <PasswordInput
                        className={classes.form_input}
                        variant="filled"
                        size="md"
                        radius="lg"
                        placeholder="Пароль"
                    />
                </Stack>
                <Button fullWidth color="#5B6CF0" size="lg" radius="lg" mt="lg"><Text fw={600} size="24px">Войти</Text></Button>
                {!matchesMobile && <LoginFormAuthIITBlock/>}
            </Box>
            {matchesMobile && <Box w="80%">
                <LoginFormAuthIITBlock />
            </Box>}
        </Fragment>
    )
};