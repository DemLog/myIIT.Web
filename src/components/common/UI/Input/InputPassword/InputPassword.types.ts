import {InputSize} from "@components/UI/Input";
import {ElementProps, InputVariant} from "@mantine/core";

export interface InputPasswordProps extends ElementProps<'input', 'size'> {
    variant: InputVariant;
    placeholder?: string;
    size: InputSize;
}