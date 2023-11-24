import {ButtonVariant, MantineColor, MantineSize} from "@mantine/core";
import {ButtonProps as MButtonProps} from "@mantine/core";

export type ButtonDefaultColor = "primary" | "secondary" | "negative";
export type ButtonColor = ButtonDefaultColor | MantineColor;

export type ButtonDefaultSize = "extra-small" | "small" | "medium" | "large" | "extra-large";
export type ButtonSize = ButtonDefaultSize | MantineSize;

export interface ButtonProps {
    text: string;
    color: ButtonColor;
    colorText?: MantineColor;
    size: ButtonSize;
    variant: ButtonVariant;
    fullWidth?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    disabled?: boolean;
    loading?: boolean;
}