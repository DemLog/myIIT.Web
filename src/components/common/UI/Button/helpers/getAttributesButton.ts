import { ButtonProps } from "@components/UI/Button";
import {ButtonColor, ButtonDefaultColor, ButtonDefaultSize, ButtonSize} from "@components/UI/Button/Button.types";

export const getAttributesButton = (props: ButtonProps): Record<string, string> => {
    const attributesList: Record<string, string> = {};

    const isButtonDefaultColor = (color: ButtonColor): color is ButtonDefaultColor =>
        ["primary", "secondary", "negative"].includes(color as string);

    const isButtonDefaultSize = (size: ButtonSize): size is ButtonDefaultSize =>
        ["extra-small", "small", "medium", "large", "extra-large"].includes(size as string);

    if (isButtonDefaultColor(props.color)) {
        attributesList["data-color"] = props.color;
    } else {
        attributesList["color"] = props.color;
    }

    if (isButtonDefaultSize(props.size)) {
        attributesList["data-size"] = props.size
    } else {
        attributesList["size"] = props.size
    }

    return attributesList;
};
