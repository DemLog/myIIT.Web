import {MantineStyleProps} from "@mantine/core";
import {ReactNode} from "react";

export interface BlockProps extends MantineStyleProps {
    children?: ReactNode;
    title?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}