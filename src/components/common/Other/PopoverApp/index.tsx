import React, {Fragment} from "react";
import {PopoverAppProps} from "./props";
import classes from "./PopoverApp.module.css";

import {Box, Divider, Popover, Text} from "@mantine/core";

export const PopoverApp: React.FC<PopoverAppProps> = (props: PopoverAppProps) => {

    return (
        <Popover classNames={{dropdown: classes.main_container}} shadow="md" {...props.popoverProps}>
            <Popover.Target>
                {props.children}
            </Popover.Target>

            <Popover.Dropdown p={6}>
                {props.title &&
                    <Fragment>
                        <Box className={classes.header} px={8} py={2}>
                            <Text fw={500} size="lg">{props.title}</Text>
                        </Box>
                        <Divider w="100%" mb="xs" />
                    </Fragment>
                }
                {props.popover}
            </Popover.Dropdown>
        </Popover>
    )
};