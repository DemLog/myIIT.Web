import React from "react";
import {PopoverAppProps} from "./props";
import classes from "./PopoverApp.module.css";

import {Popover} from "@mantine/core";

export const PopoverApp: React.FC<PopoverAppProps> = (props: PopoverAppProps) => {

    return (
        <Popover classNames={{dropdown: classes.main_container}} shadow="md" {...props.popoverProps}>
            <Popover.Target>
                {props.children}
            </Popover.Target>

            <Popover.Dropdown p={6}>
                {props.popover}
            </Popover.Dropdown>
        </Popover>
    )
};