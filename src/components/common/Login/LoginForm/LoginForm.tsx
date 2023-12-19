import React, { Fragment, useEffect, useState } from "react";
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
import { ReactSVG } from "react-svg";
import personIcon from "@assets/images/icons/w400/person_fill.svg";
import lockIcon from "@assets/images/icons/w400/lock_fill.svg";
import { toast } from "react-toastify";


const LoginFormComponents: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const [openedSPModal, { open: openSPModal, close: closeSPModal }] = useDisclosure(false);
    const [openedEPCModal, { open: openEPCModal, close: closeEPCModal }] = useDisclosure(false);

    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [loadingData, setLoadingData] = useState(false);

    const { userStore } = useStores();
    const navigate = useNavigate();

    useEffect(() => {
        const loadingData = async () => {
            if (userStore.getSession()) {
                navigate("/");
            }
        }

        loadingData();
    }, []);

    const handleSubmitButton = async () => {
        setLoadingData(true);

        const response = await apiService({
            method: "POST", url: "auth.login", body: {
                login: loginValue,
                password: passwordValue
            }
        });

        if (response?.response_code === 201) {
            const data = response.data as IUserLogin;

            userStore.setSession(data);
            if (data.moodleConsent) {
                navigate("/");
            } else {
                openSPModal();
            }
        } else {
            toast.error(response?.error ? response.error.message : "Ошибка авторизации!");
        }
        setLoadingData(false);
    };

    const handleSavePassword = async (status: boolean) => {
        if (status) {
            openEPCModal();
        } else {
            navigate("/");
        }
    };

    const handleInputPinCode = async (status: boolean) => {
        if (status) {
            const data = await apiService({
                method: "POST", url: "auth.savePassword", body: {
                    login: loginValue,
                    password: passwordValue
                },
                token: userStore.getSession()?.token
            });
            navigate("/");
        }
    };

    return (
        <Fragment>
            <SavePasswordModal opened={openedSPModal} onClose={closeSPModal} callback={handleSavePassword} />
            <EnterPINCodeModal opened={openedEPCModal} onClose={closeEPCModal} callback={handleInputPinCode} />
            <Box className={classes.main} py="md" px={matchesMobile ? "md" : "xl"} w="100%">
                <Box className={classes.title_block}>
                    <Text size={matchesMobile ? "large" : "extra-large"} weight="medium" color="text-primary" ta="center">Авторизация</Text>
                </Box>
                <Stack className={classes.input_block} gap="xs" mt={matchesMobile ? "lg" : "xl"}>
                    <InputText leftSection={<ReactSVG className={classes.icon} src={personIcon} />} placeholder="Логин Moodle" variant="default" size="medium" onChange={e => setLoginValue(e.target.value)} />
                    <InputPassword leftSection={<ReactSVG className={classes.icon} src={lockIcon} />} placeholder="Пароль" variant="default" size="medium" onChange={e => setPasswordValue(e.target.value)} />
                </Stack>
                <Box className={classes.iit_moodle_block} mt="xs">
                    <Image src={iitMoodleIcon} h="18px" w="auto" fit="contain" />
                    <Text size="12px" weight="light" fs="italic" color="black" ml={2}>Вход происходит через ИИТ Moodle</Text>
                </Box>
                <Box className={classes.button_block} mt={matchesMobile ? "lg" : "xl"}>
                    <Button text="Войти" color="primary" size="large" variant="filled" fullWidth onClick={handleSubmitButton} loading={loadingData} />
                </Box>
            </Box>
        </Fragment>
    );
};

export const LoginForm = observer(LoginFormComponents);
