import { TextInputProps } from "@mantine/core";
import { MitSize } from "@styles/core";
import { MitColor } from "@styles/core/common.types";

export interface InputTextProps extends TextInputProps {
    size?: MitSize;
    color?: MitColor;
}