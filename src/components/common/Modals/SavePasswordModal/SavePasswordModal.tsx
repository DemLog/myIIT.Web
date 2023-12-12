import React from "react";
import { SavePasswordModalProps } from "./SavePasswordModal.types";
import classes from "./SavePasswordModal.module.css";

import { Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Text, Modal } from "@components/UI";

import PasswordImage from "@assets/images/login/password_image.png";


export const SavePasswordModal: React.FC<SavePasswordModalProps> = (props: SavePasswordModalProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const handleCancelButton = () => {
        props.onClose();
        props.callback(false)
    };

    const handleNextButton = () => {
        props.onClose();
        props.callback(true)
    };

    return (
        <Modal {...props} title="Сохранение пароля?" buttons={[
            {
                text: "Далее",
                variant: "filled",
                color: "primary",
                onClick: handleNextButton
            },
            {
                text: "Нет, спасибо",
                variant: "filled",
                color: "gray",
                onClick: handleCancelButton
            }
        ]}>
            <Box className={classes.main}>
                <Box className={classes.image_block}>
                    <Image src={PasswordImage} h="180px" w="auto" fit="contain" />
                </Box>
                <Box className={classes.text_block} mb="lg">
                    <Text size={matchesMobile ? "medium" : "large"} weight="regular" ta="center">
                        Желаете сохранить свой пароль на сервере myIIT, чтобы иметь быстрый доступ к сервисам Moodle?
                    </Text>
                    <Text size={matchesMobile ? "extra-small" : "small"} weight="regular" color="text-secondary" ta="center" mt={4}>
                        Пароль будет зашифрован PIN-кодом пользователеля
                    </Text>
                </Box>

            </Box>
        </Modal>
    );
}