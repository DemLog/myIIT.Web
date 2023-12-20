import { ReactNode } from "react";

export interface PopoverProps {
    children?: ReactNode;
    target?: ReactNode;
    title?: string;
    onChange?: ((opened: boolean) => void);
    opened?: boolean;
}