import {MantineStyleProps} from "@mantine/core/lib";
import { ReactNode } from "react";

export interface ContainerProps extends MantineStyleProps {
    children?: ReactNode;
}