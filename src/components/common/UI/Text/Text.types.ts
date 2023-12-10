import {MantineStyleProps} from "@mantine/core/lib";
import React, { ReactNode } from "react";

import {MitColor, MitSize, MitWeight} from "@styles/core/common.types";

import {StyleProp} from "@mantine/core/lib/core/Box/style-props/style-props.types";
import {DefaultMantineColor, MantineSize} from "@mantine/core";

export interface TextProps extends MantineStyleProps {
    children?: ReactNode;
    weight?: MitWeight | StyleProp<React.CSSProperties['fontWeight']>;
    size?: MitSize | MantineSize | string;
    color?: MitColor | DefaultMantineColor;
}