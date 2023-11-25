import React from "react";
import {InputPasswordProps} from "./InputPassword.types";
import classes from "./InputPassword.module.css";

import {PasswordInput} from "@mantine/core";
import {getStyleSize} from "@styles/core/helpers";

export const InputPassword: React.FC<InputPasswordProps> = (props: InputPasswordProps) => {
    return (
        <PasswordInput classNames={{root: classes.root, input: classes.input}} {...props} radius="lg"
                       size={getStyleSize(props.size)}/>
    );
}