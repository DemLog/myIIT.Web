import React from "react";
import {CardProps} from "./Card.types";
import classes from "./Card.module.css";

import {Box} from "@mantine/core";


export const Card: React.FC<CardProps> = (props: CardProps) => {

    return (
        <Box className={classes.card} {...props}>
            {props.children}
        </Box>
    )
}