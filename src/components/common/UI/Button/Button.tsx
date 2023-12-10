import React from "react";
import {ButtonProps} from "./Button.types";
import classes from "./Button.module.css";

import {getAttributesButton, getAttributesText} from "./helpers";
import {getStyleSize} from "@styles/core/helpers";

import {Button as MButton, Image, Text} from "@mantine/core";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const buttonAttributes = getAttributesButton(props);
    const textAttributes = getAttributesText(props);

    return (
        <MButton className={classes.button} radius="lg" variant={props.variant} size={getStyleSize(props.size)}
                 fullWidth={props.fullWidth} {...buttonAttributes} disabled={props.disabled} loading={props.loading}
                 leftSection={props.leftIcon && <Image className={classes.icon} src={props.leftIcon} w="auto" fit="contain"/>}
                 rightSection={props.rightIcon && <Image className={classes.icon} src={props.rightIcon} w="auto" fit="contain"/>}
                 onClick={props.onClick} w={props.width} px="sm"
        >
            <Text className={classes.text} c={props.colorText} size={getStyleSize(props.size, true)} {...textAttributes}>{props.text}</Text>
        </MButton>
    )
}