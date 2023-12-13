import React from "react";
import { TitleBlockProps } from "./TitleBlock.types";
import classes from "./TitleBlock.module.css";

import { Block, Text } from "@components/UI";
import { Box } from "@mantine/core";
import { ReactSVG } from "react-svg";

export const TitleBlock: React.FC<TitleBlockProps> = (props: TitleBlockProps) => {

    return (
        <Block>
            <Box className={classes.content}>
                {props.icon &&
                    <Box className={classes.icon_box}>
                        <ReactSVG src={props.icon} />
                    </Box>
                }
                <Box className={classes.title_box}>
                    <Text size="extra-large" weight="medium">{props.title}</Text>
                </Box>
            </Box>
        </Block>
    )
}