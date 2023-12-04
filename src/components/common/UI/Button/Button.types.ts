import {ButtonVariant, MantineColor, MantineSize} from "@mantine/core";
import {MitSize} from "@styles/core";

export type ButtonDefaultColor = "primary" | "secondary" | "negative";
export type ButtonColor = ButtonDefaultColor | MantineColor;

export type ButtonSize = MitSize | MantineSize;

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