import React from "react";
import { InputPasswordProps } from "./InputPassword.types";
import classes from "./InputPassword.module.css";

import { TextInput } from "@mantine/core";
import { getStyleColor, getStyleSize } from "@styles/core/helpers";

export const InputPassword: React.FC<InputPasswordProps> = (props: InputPasswordProps) => {
    const { size = "medium", color = "primary" } = props;

    return (
        <TextInput type="password" classNames={{ input: classes.input }} radius="lg" {...props} size={getStyleSize(size)} color={getStyleColor(color)} />
    );
}