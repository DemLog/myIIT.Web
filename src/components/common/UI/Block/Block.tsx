import React from "react";
import { BlockProps } from "./Block.types";
import classes from "./Block.module.css";

import { Box } from "@mantine/core";
import { Text } from "@components/UI";

export const Block: React.FC<BlockProps> = (props: BlockProps) => {
    const { children } = props;

    return (
        <Box className={classes.block} {...props} p="xs">
            {props.title &&
                <Box className={classes.title_box} mb="sm">
                    <Text size="small" weight="medium">{props.title}</Text>
                </Box>
            }
            <Box className={classes.content} px="xs">
                {children}
            </Box>
        </Box>
    )
}