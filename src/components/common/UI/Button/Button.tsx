import React from "react";
import { ButtonProps } from "./Button.types";
import classes from "./Button.module.css";

import { getAttributesButton, getAttributesText } from "./helpers";
import { getStyleColor, getStyleSize } from "@styles/core/helpers";

import { Button as MButton } from "@mantine/core";
import { Text } from "../Text";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { color = "primary", colorText = "white", size = "medium" } = props;

    return (
        <MButton radius="lg" {...props} size={getStyleSize(size)} color={getStyleColor(color)} >
            <Text color={getStyleColor(colorText)} size={getStyleSize(size, true)} weight="bold">{props.text}</Text>
        </MButton>
    )
}