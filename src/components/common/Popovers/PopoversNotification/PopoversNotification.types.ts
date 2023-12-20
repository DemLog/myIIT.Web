import { ReactNode } from "react";

export interface PopoversNotificationProps {
    children: ReactNode;
    onChange?: ((opened: boolean) => void);
    openFull: () => void;
    opened: boolean;
    openPanel: () => void;
}