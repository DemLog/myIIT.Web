import React, { Fragment } from "react";
import {PopoverProps} from "./Popover.types";
import classes from "./Popover.module.css";

import {Box, Divider, Popover as MPopover} from "@mantine/core";

import { Text } from "@components/UI";

export const Popover: React.FC<PopoverProps> = (props: PopoverProps) => {

    return (
        <MPopover classNames={{dropdown: classes.main_container}} shadow="md"
         transitionProps={{
                transition: "scale-y"
        }}>
            <MPopover.Target>
                {props.target}
            </MPopover.Target>

            <MPopover.Dropdown p={6}>
                {props.title &&
                    <Fragment>
                        <Box className={classes.header} px={8} py={2}>
                            <Text size="small" weight="regular">{props.title}</Text>
                        </Box>
                        <Divider w="100%" mb="xs" />
                    </Fragment>
                }
                {props.children}
            </MPopover.Dropdown>
        </MPopover>
    )
}