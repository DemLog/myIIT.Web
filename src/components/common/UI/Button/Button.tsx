import React from "react";
import {ButtonProps} from "./Button.types";
import classes from "./Button.module.css";
import {getAttributesButton, getAttributesText} from "./helpers";

import {Button as MButton, Image, Text} from "@mantine/core";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const buttonAttributes = getAttributesButton(props);
    const textAttributes = getAttributesText(props);

    return (
        <MButton className={classes.button} radius="lg" size="lg" variant={props.variant}
                 fullWidth={props.fullWidth} {...buttonAttributes} disabled={props.disabled} loading={props.loading}
                 leftSection={props.leftIcon && <Image className={classes.icon} src={props.leftIcon} w="auto" fit="contain"/>}
                 rightSection={props.rightIcon && <Image className={classes.icon} src={props.rightIcon} w="auto" fit="contain"/>}
        >
            <Text className={classes.text} c={props.colorText} {...textAttributes}>{props.text}</Text>
        </MButton>
    )
}