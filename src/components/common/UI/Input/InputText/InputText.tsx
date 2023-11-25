import React from "react";
import {InputTextProps} from "./InputText.types";
import classes from "./InputText.module.css";

import {TextInput} from "@mantine/core";
import {getStyleSize} from "@styles/core/helpers";

export const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
    return (
        <TextInput classNames={{input: classes.input}} {...props} radius="lg" size={getStyleSize(props.size)} />
    );
}