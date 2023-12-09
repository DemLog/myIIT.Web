import {MantineStyleProps} from "@mantine/core";
import {ReactNode} from "react";

export interface CardProps extends MantineStyleProps {
    children?: ReactNode;
}