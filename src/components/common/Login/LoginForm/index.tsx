import React, {Fragment, useState} from "react";
import {LoginFormProps} from "./props";
import classes from "./LoginForm.module.css";

import {
    Box,
    Button,
    createTheme,
    Input,
    MantineThemeProvider,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    Title
} from "@mantine/core";
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

    const theme = createTheme({
        components: {
            Input: Input.extend({
                classNames: {
                    input: classes.input,
                },
            }),
        },
    });

    return (
        <Fragment>
            <Box className={classes.main_container} px="xl" py="xl" pt="xs" mt="xl">
                <Title className={classes.form_title}>Авторизация</Title>
                <Stack className={classes.form_input_block}>
                    <MantineThemeProvider theme={theme}>
                        <TextInput
                            variant="filled"
                            size="md"
                            radius="lg"
                            placeholder="Логин Moodle"
                            onChange={e => setLoginValue(e.target.value)}
                        />
                        <PasswordInput
                            size="md"
                            radius="lg"
                            placeholder="Пароль"
                            onChange={e => setPasswordValue(e.target.value)}
                        />
                    </MantineThemeProvider>
                </Stack>
                {!matchesMobile && <LoginFormAuthIITBlock/>}
                <Button onClick={() => handleSubmitButton()} w={360} color="#5B6CF0" size="lg" radius="lg" mt="lg"><Text fw={600} size="24px">Войти</Text></Button>
            </Box>
            {matchesMobile && <Box w="80%">
                <LoginFormAuthIITBlock/>
            </Box>}
        </Fragment>
    )
};

export const LoginForm = observer(LoginFormComponent);