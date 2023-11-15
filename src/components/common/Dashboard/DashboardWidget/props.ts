import {ReactNode} from "react";

export type DashboardWidgetHeaderTitleSide = {leftSide: string, rightSide: string};

export type DashboardWidgetHeaderTitle = string | DashboardWidgetHeaderTitleSide;

export interface DashboardWidgetProps {
    header?: ReactNode | DashboardWidgetHeaderTitle | null;
    headerNegativeColor?: boolean;
    children: ReactNode | null;
    background: string;
}