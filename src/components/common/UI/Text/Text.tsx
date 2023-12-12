import React from "react";
import {TextProps} from "./Text.types";
import classes from "./Text.module.css";

import {Text as MText} from "@mantine/core";
import {getStyleWeight} from "@styles/core/helpers/getStyleWeight";
import {getStyleSize} from "@styles/core/helpers";
import {getStyleColor} from "@styles/core/helpers/getStyleColor";

export const Text: React.FC<TextProps> = (props: TextProps) => {

    return (
        <MText className={classes.text} {...props} fw={getStyleWeight(props.weight || 300)}
               size={getStyleSize(props.size || "medium", true)} c={getStyleColor(props.color || "text-primary")}>
            {props.children}
        </MText>
    )
}