import React from "react";
import {StyleProp} from "@mantine/core/lib/core/Box/style-props/style-props.types";

import { MitStyles } from "@styles/core";
import {MitWeight} from "@styles/core/common.types";

type StyleMapping = Record<MitWeight, number>;

const textWeight: StyleMapping = {
    "thin": MitStyles.thin,
    "light": MitStyles.light,
    "regular": MitStyles.regular,
    "medium": MitStyles.medium,
    "bold": MitStyles.bold,
};

export const getStyleWeight = (value: MitWeight | StyleProp<React.CSSProperties['fontWeight']>): number | StyleProp<React.CSSProperties['fontWeight']> => {
    const isDefaultWeight = (weight: MitWeight | StyleProp<React.CSSProperties['fontWeight']>): weight is MitWeight =>
        ["thin", "light", "regular", "medium", "bold"].includes(weight as string);

    if (isDefaultWeight(value)) {
        return textWeight[value];
    }

    return value;
};
