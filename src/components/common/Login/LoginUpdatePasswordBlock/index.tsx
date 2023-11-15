import React from "react";
import {LoginUpdatePasswordBlockProps} from "./props";
import classes from "./LoginUpdatePasswordBlock.module.css";

import {Box, Image, Text} from "@mantine/core";

export const LoginUpdatePasswordBlock: React.FC<LoginUpdatePasswordBlockProps> = (props: LoginUpdatePasswordBlockProps) => {

    return (
        <Box className={classes.login_update_password_block} mt="sm" mb="xs">
            <Text fw={200} c="#393939" size="md">Изменился пароль Moodle? <Text
                className={classes.login_update_password_link} component="a" href="#"
                fw={400}>Обновить</Text>
            </Text>
        </Box>
    )
};