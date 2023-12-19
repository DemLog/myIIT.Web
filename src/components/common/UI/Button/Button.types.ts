import { ButtonProps as MButtonProps } from "@mantine/core";
import { MitColor, MitSize } from "@styles/core/common.types";

export interface ButtonProps extends MButtonProps {
    text: string;
    color?: MitColor;
    colorText?: MitColor;
    size?: MitSize;
}