import React from "react";
import { WidgetProps } from "./Widget.types";
import classes from "./Widget.module.css";

import { Box } from "@mantine/core";
import { Text } from "@components/UI";

export const Widget: React.FC<WidgetProps> = (props: WidgetProps) => {
    const { variant = "light", backgroundColor = "linear-gradient(180deg, rgba(0,163,255,1) 0%, rgba(36,0,255,0.15) 100%)" } = props;

    return (
        <Box className={classes.main} style={{ background: backgroundColor }}>
            {props.title || props.rightSection &&
                <Box className={classes.title_block} data-variant={variant}>
                    {props.title &&
                        <Box className={classes.title_box}>
                            <Text>{props.title}</Text>
                        </Box>
                    }
                    {props.rightSection &&
                        <Box className={classes.right_section_box}>
                            {props.rightSection}
                        </Box>
                    }
                </Box>
            }
            <Box className={classes.content_block}>
                {props.children}
            </Box>
        </Box>
    )
}