import React, { Fragment, useState } from "react";
import { LoginFormProps } from "./LoginForm.types";
import classes from "./LoginForm.module.css";

import { Button, Card, InputPassword, InputText, Text } from "@components/UI";
import { EnterPINCodeModal, SavePasswordModal } from "@components/Modals";

import { Box, Image, Stack } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import iitMoodleIcon from "@assets/images/icons/black-iit.png";
import apiService from "@core/services/apiService";
import { IUserLogin } from "@models/user/IUserLogin";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { useNavigate } from "react-router-dom";


const LoginFormComponents: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const [openedSPModal, { open: openSPModal, close: closeSPModal }] = useDisclosure(false);
    const [openedEPCModal, { open: openEPCModal, close: closeEPCModal }] = useDisclosure(false);

    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const { userStore } = useStores();
    const navigate = useNavigate();

    const handleSavePassword = async (status: boolean) => {
        if (status) {
            openEPCModal();
        } else {
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
        }
    };

    const handleInputPinCode = async (status: boolean) => {
        if (status) {
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
        }
    };

    return (
        <Fragment>
            <SavePasswordModal opened={openedSPModal} onClose={closeSPModal} callback={handleSavePassword} />
            <EnterPINCodeModal opened={openedEPCModal} onClose={closeEPCModal} callback={handleInputPinCode} />
            <Box className={classes.main}>
                <Card py="md" px="lg" w="100%">
                    <Box className={classes.title_block}>
                        <Text size={matchesMobile ? "large" : "extra-large"} weight="medium" color="text-primary" ta="center">Авторизация</Text>
                    </Box>
                    <Stack className={classes.input_block} gap="xs" mt="lg">
                        <InputText placeholder="Логин Moodle" variant="default" size={matchesMobile ? "medium" : "large"} onChange={e => setLoginValue(e.target.value)} />
                        <InputPassword placeholder="Пароль" variant="default" size={matchesMobile ? "medium" : "large"} onChange={e => setPasswordValue(e.target.value)} />
                    </Stack>
                    <Box className={classes.iit_moodle_block} mt="xs">
                        <Image src={iitMoodleIcon} h="18px" w="auto" fit="contain" />
                        <Text size="extra-small" weight="light" fs="italic" color="black">Вход происходит через ИИТ Moodle</Text>
                    </Box>
                    <Box className={classes.button_block} mt="lg">
                        <Button text="Войти" color="primary" size="extra-large" variant="filled" fullWidth onClick={openSPModal} />
                    </Box>
                </Card>
            </Box>
        </Fragment>
    );
};

export const LoginForm = observer(LoginFormComponents);
