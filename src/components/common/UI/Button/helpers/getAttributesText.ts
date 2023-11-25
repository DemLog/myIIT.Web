import {ButtonProps} from "@components/UI/Button";
import {ButtonColor, ButtonDefaultColor, ButtonDefaultSize, ButtonSize} from "@components/UI/Button/Button.types";

export const getAttributesText = (props: ButtonProps): Record<string, string> => {
    const attributesList: Record<string, string> = {};

    const isButtonDefaultSize = (size: ButtonSize): size is ButtonDefaultSize =>
        ["extra-small", "small", "medium", "large", "extra-large"].includes(size as string);

    if (isButtonDefaultSize(props.size)) {
        attributesList["data-size"] = props.size
    } else {
        attributesList["size"] = props.size
    }

    if (props.disabled) {
        attributesList["data-disabled"] = "true";
    }

    attributesList["data-variant"] = props.variant;

    return attributesList;
};
