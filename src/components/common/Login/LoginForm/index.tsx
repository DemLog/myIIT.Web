import React, {Fragment, useState} from "react";
import {LoginFormProps} from "./props";
import classes from "./LoginForm.module.css";

import {Box, Button, PasswordInput, Stack, Text, TextInput, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import {LoginFormAuthIITBlock} from "./LoginFormAuthIITBlock"
import apiService from "@core/services/apiService";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";
import {IUserLogin} from "@models/user/IUserLogin";
import {useNavigate} from "react-router-dom";

const LoginFormComponent: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const {userStore} = useStores();
    const navigate = useNavigate();

    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleSubmitButton = async () => {
        const data = await apiService({
            method: "POST", url: "auth.login", body: {
                login: loginValue,
                password: passwordValue
            }
        });

        if (data?.response_code === 201) {
            userStore.setSession(data.data as IUserLogin);
            navigate("/");
        }
    };

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
                        onChange={e => setLoginValue(e.target.value)}
                    />
                    <PasswordInput
                        className={classes.form_input}
                        variant="filled"
                        size="md"
                        radius="lg"
                        placeholder="Пароль"
                        onChange={e => setPasswordValue(e.target.value)}
                    />
                </Stack>
                <Button onClick={() => handleSubmitButton()} fullWidth color="#5B6CF0" size="lg" radius="lg" mt="lg"><Text fw={600} size="24px">Войти</Text></Button>
                {!matchesMobile && <LoginFormAuthIITBlock/>}
            </Box>
            {matchesMobile && <Box w="80%">
                <LoginFormAuthIITBlock/>
            </Box>}
        </Fragment>
    )
};

export const LoginForm = observer(LoginFormComponent);