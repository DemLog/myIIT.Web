import { MitColor } from "@styles/core/common.types";
import { DefaultMantineColor } from "@mantine/core";
import { MitColors } from "@styles/core/common";
import { useColorScheme } from "@mantine/hooks";

type StyleMapping = Record<MitColor, string>;

const getDefaultColor = (colorScheme: string, light: string, dark: string): string =>
    colorScheme === "light" ? light : dark;

const createDefaultColors = (colorScheme: string): StyleMapping => ({
    primary: getDefaultColor(colorScheme, MitColors.primaryMainLight, MitColors.primaryMainDark),
    "primary-light": getDefaultColor(colorScheme, MitColors.primaryLightLight, MitColors.primaryLightDark),
    "primary-dark": getDefaultColor(colorScheme, MitColors.primaryDarkLight, MitColors.primaryDarkDark),
    "primary-neutral": getDefaultColor(colorScheme, MitColors.primaryNeutralLight, MitColors.primaryNeutralDark),
    secondary: getDefaultColor(colorScheme, MitColors.secondaryMainLight, MitColors.secondaryMainDark),
    "secondary-light": getDefaultColor(colorScheme, MitColors.secondaryLightLight, MitColors.secondaryLightDark),
    "secondary-dark": getDefaultColor(colorScheme, MitColors.secondaryDarkLight, MitColors.secondaryDarkDark),
    "secondary-neutral": getDefaultColor(colorScheme, MitColors.secondaryNeutralLight, MitColors.secondaryNeutralDark),
    "text-primary": getDefaultColor(colorScheme, MitColors.textPrimaryLight, MitColors.textPrimaryDark),
    "text-secondary": getDefaultColor(colorScheme, MitColors.textSecondaryLight, MitColors.textSecondaryDark),
    error: MitColors.errorMain,
    "error-light": MitColors.errorLight,
    "error-dark": MitColors.errorDark,
    "error-neutral": MitColors.errorNeutral,
    warning: MitColors.warningMain,
    "warning-light": MitColors.warningLight,
    "warning-dark": MitColors.warningDark,
    "warning-neutral": MitColors.warningNeutral,
    accept: MitColors.acceptMain,
    "accept-light": MitColors.acceptLight,
    "accept-dark": MitColors.acceptDark,
    "accept-neutral": MitColors.acceptNeutral,
    disabled: MitColors.disabledMain,
    "disabled-light": MitColors.disabledLight,
    "disabled-dark": MitColors.disabledDark,
    "disabled-neutral": MitColors.disabledNeutral,
    "background-light": MitColors.backgroundLight,
    "background-dark": MitColors.backgroundDark
});

export const getStyleColor = (value: MitColor | DefaultMantineColor): string => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const colorScheme = useColorScheme();
    const defaultColors = createDefaultColors(colorScheme);

    return defaultColors[value as MitColor] || value as string;
};
