import React from "react";
import {ContainerProps} from "./Container.types";
import classes from "./Container.module.css";

import {Box} from "@mantine/core";

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    return (
        <Box className={classes.container} px="md" {...props} >
            {props.children}
        </Box>
    )
}