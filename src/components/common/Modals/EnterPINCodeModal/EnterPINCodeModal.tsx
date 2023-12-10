import React, { useState } from "react";
import { EnterPINCodeModalProps } from "./EnterPINCodeModal.types";
import classes from "./EnterPINCodeModal.module.css";

import { Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Text, Modal } from "@components/UI";

import PasswordImage from "@assets/images/login/password_image.png";
import { InputPINCode } from "@components/UI/Input";
import { KeyboardNumber } from "@components/UI/Keyboard";

export const EnterPINCodeModal: React.FC<EnterPINCodeModalProps> = (props: EnterPINCodeModalProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const [valuePIN, setValuePIN] = useState<string>("");

    const handleCancelButton = () => {
        props.onClose();
        // props.callback(false)
    };

    return (
        <Modal {...props} title="Ввод PIN-кода" buttons={matchesMobile ? [] : [
            {
                text: "Отменить",
                variant: "filled",
                color: "gray",
                onClick: handleCancelButton
            }
        ]}>
            <Box className={classes.main}>
                {matchesPC && <Box className={classes.image_block}>
                    <Image src={PasswordImage} h="228px" w="auto" fit="contain" />
                </Box>}
                <Box className={classes.pin_block}>
                    <Box className={classes.title_box}>
                        <Text size="small" weight="regular" color="text-secondary">Введите PIN-код:</Text>
                    </Box>
                    <Box className={classes.input_box}>
                        <InputPINCode value={valuePIN} onChange={setValuePIN} />
                    </Box>
                    <Box className={classes.keyboard_box}>
                        <KeyboardNumber onChange={setValuePIN} />
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}