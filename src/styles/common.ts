import {createTheme, rgba} from "@mantine/core";
import {CSSVariablesResolver} from "@mantine/core/lib";

export const CommonStyles = createTheme({

    other: {
        headings: { fontFamily: 'IBM Plex Sans, Sora, sans-serif' },

        //colors
        primaryMainLight: '#5B6CF0',
        primaryNegativeLight: '#B7B7B7',
        secondaryMainLight: '#5BE7F0',
        backgroundMainLight: '#EDEDED',
        backgroundAuthLight: "linear-gradient(180deg, rgba(186,174,255,0.85) 0%, rgba(249,249,249,0) 100%)",

        primaryText: '#4C5070',
        secondaryText: '#929292',
        errorText: '#FC4F4F',
        warningText: '#E1E442',
        whiteText: '#FFFFFF',


        //fonts
        fontFamily: 'IBM Plex Sans, Sora, sans-serif',


        //sizes
        //EXTRA-SMALL
        exmSize: '12px',

        //SMALL
        sSize: '14px',

        //MEDIUM
        mSize: '16px',

        //LARGE
        lSize: '20px',

        //EXTRA-LARGE
        exlSize: '24px',

        //weights
        Thin: 100,
        Light: 300,
        Regular: 400,
        Medium: 500,
        Bold: 700,
    },
});

export const resolver: CSSVariablesResolver = (theme) => ({
    variables: {
        //переменные, не зависящие от цветовой схемы
        '--font-plex': theme.other.fontFamily,

        '--extra-small-size': theme.other.exmSize,
        '--small-size': theme.other.sSize,
        '--medium-size': theme.other.mSize,
        '--large-size': theme.other.lSize,
        '--extra-large-size': theme.other.exlSize,

        '--thin-weight': theme.other.Thin,
        '--light-weight': theme.other.Light,
        '--regular-weight': theme.other.Regular,
        '--medium-weight': theme.other.Medium,
        '--bold-weight': theme.other.Bold,

    },

    light: {
        //переменные только для светлой цветовой схемы
        '--primary-main': theme.other.primaryMainLight,
        '--primary-negative': theme.other.primaryNegativeLight,
        '--secondary-main': theme.other.secondaryMainLight,

        '--background-main': theme.other.backgroundMainLight,
        '--background-auth': theme.other.backgroundAuthLight,

        '--primary-text': theme.other.primaryText,
        '--secondary-text': theme.other.secondaryText,
        '--error-text': theme.other.errorText,
        '--warning-text': theme.other.warningText,
        '--white-text': theme.other.whiteText
    },
    dark: {
        //переменные только для темной цветовой схемы
    },
});