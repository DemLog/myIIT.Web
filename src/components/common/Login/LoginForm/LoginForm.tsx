import React, { Fragment } from "react";
import { LoginFormProps } from "./LoginForm.types";
import classes from "./LoginForm.module.css";

import { Button, Card, InputPassword, InputText, Text } from "@components/UI";
import { EnterPINCodeModal, SavePasswordModal } from "@components/Modals";

import { Box, Image, Stack } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import iitMoodleIcon from "@assets/images/icons/black-iit.png";


export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const [openedSPModal, { open: openSPModal, close: closeSPModal }] = useDisclosure(false);
    const [openedEPCModal, { open: openEPCModal, close: closeEPCModal }] = useDisclosure(false);

    const handleSavePassword = (status: boolean) => {
        if (status) {
            openEPCModal();
        }
    };

    return (
        <Fragment>
            <SavePasswordModal opened={openedSPModal} onClose={closeSPModal} callback={handleSavePassword}/>
            <EnterPINCodeModal opened={openedEPCModal} onClose={closeEPCModal} />
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
