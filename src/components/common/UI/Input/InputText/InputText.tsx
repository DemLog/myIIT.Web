import React from "react";
import { InputTextProps } from "./InputText.types";
import classes from "./InputText.module.css";

import { TextInput } from "@mantine/core";
import { getStyleSize } from "@styles/core/helpers";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

export const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
    const { size = "medium", color = "primary" } = props;

    return (
        <TextInput classNames={{ input: classes.input }} radius="lg" {...props} size={getStyleSize(size)} color={getStyleColor(color)} />
    );
}