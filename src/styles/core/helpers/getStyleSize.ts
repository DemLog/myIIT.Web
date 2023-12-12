import { MitSize } from "@styles/core";
import { MantineSize } from "@mantine/core/lib";
import { MitStyles } from "@styles/core";

type StyleMapping = Record<MitSize, string>;

const textSizes: StyleMapping = {
    "extra-small": MitStyles.esTSize,
    "small": MitStyles.sTSize,
    "medium": MitStyles.mTSize,
    "large": MitStyles.lTSize,
    "extra-large": MitStyles.elTSize,
};

const defaultSizes: StyleMapping = {
    "extra-small": MitStyles.esSize,
    "small": MitStyles.sSize,
    "medium": MitStyles.mSize,
    "large": MitStyles.lSize,
    "extra-large": MitStyles.elSize,
};

export const getStyleSize = (value: MitSize | MantineSize | string, isText?: boolean): string => {
    const isDefaultSize = (size: MitSize | MantineSize | string): size is MitSize =>
        ["extra-small", "small", "medium", "large", "extra-large"].includes(size as string);

    if (isDefaultSize(value)) {
        const sizeMapping = isText ? textSizes : defaultSizes;
        return sizeMapping[value];
    }

    return value;
};
