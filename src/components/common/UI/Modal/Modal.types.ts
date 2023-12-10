import { ReactNode } from "react";
import { ButtonProps } from "../Button";

export interface ModalButton extends Pick<ButtonProps, "text" | "color" | "variant" | "onClick"> {
}

export interface ModalProps {
    opened: boolean;
    onClose: () => void;
    title?: string;
    children?: ReactNode;
    buttons?: ModalButton[];
    withCloseButton?: boolean;
}