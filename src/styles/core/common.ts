import {createTheme} from "@mantine/core";
import {CSSVariablesResolver} from "@mantine/core/lib";

export const MitStyles = {
    headings: {fontFamily: 'IBM Plex Sans, Sora, sans-serif'},

    //colors
    primaryMainLight: '#5B6CF0',
    primaryNegativeLight: '#B7B7B7',

    secondaryMainLight: '#5BE7F0',

    backgroundMainLight: '#EDEDED',
    backgroundAuthLight: "linear-gradient(180deg, rgba(186,174,255,0.85) 0%, rgba(249,249,249,0) 100%)",
    backgroundCardLight: "linear-gradient(180deg, rgba(255,255,255,0.26) 40%, rgba(212,212,212,0.26) 100%)",

    primaryText: '#4C5070',
    secondaryText: '#929292',
    errorText: '#FC4F4F',
    warningText: '#E1E442',
    whiteText: '#FFFFFF',


    //fonts
    fontFamily: 'IBM Plex Sans, Sora, sans-serif',


    //sizes text
    //EXTRA-SMALL
    esTSize: '12px',

    //SMALL
    sTSize: '14px',

    //MEDIUM
    mTSize: '16px',

    //LARGE
    lTSize: '20px',

    //EXTRA-LARGE
    elTSize: '24px',

    //weights
    Thin: 100,
    Light: 300,
    Regular: 400,
    Medium: 500,
    Bold: 700,


    //sizes form
    //EXTRA-SMALL
    esSize: '20px',

    //SMALL
    sSize: '28px',

    //MEDIUM
    mSize: '36px',

    //LARGE
    lSize: '44px',

    //EXTRA-LARGE
    elSize: '52px',
}

export const CommonStyles = createTheme({
    other: MitStyles
});

export const CommonResolver: CSSVariablesResolver = (theme) => ({
    variables: {
        //переменные, не зависящие от цветовой схемы
        '--font-plex': theme.other.fontFamily,

        '--extra-small-text-size': theme.other.esTSize,
        '--small-text-size': theme.other.sTSize,
        '--medium-text-size': theme.other.mTSize,
        '--large-text-size': theme.other.lTSize,
        '--extra-large-text-size': theme.other.elTSize,

        '--extra-small-size': theme.other.esSize,
        '--small-size': theme.other.sSize,
        '--medium-size': theme.other.mSize,
        '--large-size': theme.other.lSize,
        '--extra-large-size': theme.other.elSize,

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
        '--background-card': theme.other.backgroundCardLight,

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