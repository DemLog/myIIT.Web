import { ReactNode } from "react";

export interface WidgetProps {
    children?: ReactNode;
    title?: string;
    rightSection?: ReactNode;
    backgroundColor?: string;
    variant?: "light" | "dark";
    noneTopBorder?: boolean;
}