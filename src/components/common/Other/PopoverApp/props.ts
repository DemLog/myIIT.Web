import {ReactNode} from "react";
import {PopoverProps} from "@mantine/core";

export interface PopoverAppProps {
    children: ReactNode;
    popover: ReactNode;
    popoverProps?: PopoverProps;
    title?: string;
}