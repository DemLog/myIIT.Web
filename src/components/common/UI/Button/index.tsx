import React from "react";
import {ButtonProps} from "./props";
import classes from "./Button.module.css";

import { Button as OGButton } from "@mantine/core";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <OGButton className={classes.button}/>
    )
}