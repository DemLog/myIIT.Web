import {ButtonProps} from "@components/UI/Button";

export const getAttributesText = (props: ButtonProps): Record<string, string> => {
    const attributesList: Record<string, string> = {};

    if (props.disabled) {
        attributesList["data-disabled"] = "true";
    }

    attributesList["data-variant"] = props.variant;

    return attributesList;
};
