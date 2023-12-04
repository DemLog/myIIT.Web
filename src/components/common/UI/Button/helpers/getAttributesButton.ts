import { ButtonProps } from "@components/UI/Button";
import {ButtonColor, ButtonDefaultColor} from "@components/UI/Button/Button.types";

export const getAttributesButton = (props: ButtonProps): Record<string, string> => {
    const attributesList: Record<string, string> = {};

    const isButtonDefaultColor = (color: ButtonColor): color is ButtonDefaultColor =>
        ["primary", "secondary", "negative"].includes(color as string);

    if (isButtonDefaultColor(props.color)) {
        attributesList["data-color"] = props.color;
    } else {
        attributesList["color"] = props.color;
    }

    return attributesList;
};
