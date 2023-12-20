import { ReactNode } from "react";

export interface PanelProps {
    children?: ReactNode;
    title?: string;
    opened: boolean;
    onClose: () => void;
}