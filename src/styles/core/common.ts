import {createTheme} from "@mantine/core";
import {CSSVariablesResolver} from "@mantine/core/lib";

export const MitColors = {
    // Light theme
    primaryMainLight: '#5B6CF0',
    primaryLightLight: '#A3ABF6',
    primaryDarkLight: '#293CD2',
    primaryNeutralLight: '#7B89F3',

    secondaryMainLight: '#00C8DE',
    secondaryLightLight: '#7DDFEC',
    secondaryDarkLight: '#0099AB',
    secondaryNeutralLight: '#44D1E4',

    backgroundMainLight: "linear-gradient(180deg, rgba(244,244,244,1) 30%, rgba(222,245,250,0) 100%)",
    backgroundAuthLight: "linear-gradient(180deg, rgba(91,108,240,0.5) 0%, rgba(217,217,217,0) 70%)",
    backgroundCardLight: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(244,244,244,0.5) 100%)",
    backgroundDividerLight: '#B7B7B7',
    backgroundBlockLight: '#FFFFFF',

    textPrimaryLight: '#4C5070',
    textSecondaryLight: '#929292',


    // Light theme
    primaryMainDark: '#5B6CF0',
    primaryLightDark: '#A3ABF6',
    primaryDarkDark: '#293CD2',
    primaryNeutralDark: '#7B89F3',

    secondaryMainDark: '#00C8DE',
    secondaryLightDark: '#7DDFEC',
    secondaryDarkDark: '#0099AB',
    secondaryNeutralDark: '#44D1E4',

    backgroundMainDark: "linear-gradient(180deg, rgba(244,244,244,1) 30%, rgba(222,245,250,0) 100%)",
    backgroundAuthDark: "linear-gradient(180deg, rgba(91,108,240,0.5) 0%, rgba(217,217,217,0) 70%)",
    backgroundCardDark: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(244,244,244,0.5) 100%)",
    backgroundDividerDark: '#B7B7B7',
    backgroundBlockDark: '#FFFFFF',

    textPrimaryDark: '#4C5070',
    textSecondaryDark: '#929292',


    // Global theme
    errorMain: '#FC4F4F',
    errorLight: '#F79A9B',
    errorDark: '#E1252D',
    errorNeutral: '#F07273',

    warningMain: '#E6E85E',
    warningLight: '#F1F2A0',
    warningDark: '#C1BB34',
    warningNeutral: '#EBED7B',

    acceptMain: '#4FEF40',
    acceptLight: '#A9F89A',
    acceptDark: '#00C300',
    acceptNeutral: '#7EF46B',

    disabledMain: '#B4B4B4',
    disabledLight: '#E8E8E8',
    disabledDark: '#585858',
    disabledNeutral: '#D8D8D8',

    backgroundLight: "rgba(255,255,255,0.1)",
    backgroundDark: "rgba(0,0,0,0.1)",
    backgroundWhite: '#FFFFFF',
    backgroundBlack: '#000000',

    textWhite: '#FFFFFF',
    textBlack: '#000000'
};

export const MitStyles = {
    headings: {fontFamily: 'IBM Plex Sans, Sora, sans-serif'},

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
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,


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
    other: Object.assign(MitStyles, MitColors)
});

export const CommonResolver: CSSVariablesResolver = (theme) => ({
    variables: {
        //переменные, не зависящие от цветовой схемы

        // Текст
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

        // Цвета
        '--error-main': theme.other.errorMain,
        '--error-light': theme.other.errorLight,
        '--error-dark': theme.other.errorDark,
        '--error-neutral': theme.other.errorNeutral,

        '--warning-main': theme.other.warningMain,
        '--warning-light': theme.other.warningLight,
        '--warning-dark': theme.other.warningDark,
        '--warning-neutral': theme.other.warningNeutral,

        '--accept-main': theme.other.acceptMain,
        '--accept-light': theme.other.acceptLight,
        '--accept-dark': theme.other.acceptDark,
        '--accept-neutral': theme.other.acceptNeutral,

        '--disabled-main': theme.other.disabledMain,
        '--disabled-light': theme.other.disabledLight,
        '--disabled-dark': theme.other.disabledDark,
        '--disabled-neutral': theme.other.disabledNeutral,

        '--background-light': theme.other.backgroundLight,
        '--background-dark': theme.other.backgroundDark,
        '--background-white': theme.other.backgroundWhite,
        '--background-black': theme.other.backgroundBlack,

        '--text-white': theme.other.textWhite,
        '--text-black': theme.other.textBlack,
    },
    light: {
        //переменные только для светлой цветовой схемы
        '--primary-main': theme.other.primaryMainLight,
        '--primary-light': theme.other.primaryLightLight,
        '--primary-dark': theme.other.primaryDarkLight,
        '--primary-neutral': theme.other.primaryNeutralLight,

        '--secondary-main': theme.other.secondaryMainLight,
        '--secondary-light': theme.other.secondaryLightLight,
        '--secondary-dark': theme.other.secondaryDarkLight,
        '--secondary-neutral': theme.other.secondaryNeutralLight,

        '--background-main': theme.other.backgroundMainLight,
        '--background-auth': theme.other.backgroundAuthLight,
        '--background-card': theme.other.backgroundCardLight,
        '--background-divider': theme.other.backgroundDividerLight,
        '--background-block': theme.other.backgroundBlockLight,

        '--text-primary': theme.other.textPrimaryLight,
        '--text-secondary': theme.other.textSecondaryLight,
    },
    dark: {
        //переменные только для темной цветовой схемы
        '--primary-main': theme.other.primaryMainLight,
        '--primary-light': theme.other.primaryLightLight,
        '--primary-dark': theme.other.primaryDarkLight,
        '--primary-neutral': theme.other.primaryNeutralLight,

        '--secondary-main': theme.other.secondaryMainLight,
        '--secondary-light': theme.other.secondaryLightLight,
        '--secondary-dark': theme.other.secondaryDarkLight,
        '--secondary-neutral': theme.other.secondaryNeutralLight,

        '--background-main': theme.other.backgroundMainLight,
        '--background-auth': theme.other.backgroundAuthLight,
        '--background-card': theme.other.backgroundCardLight,
        '--background-divider': theme.other.backgroundDividerLight,
        '--background-block': theme.other.backgroundBlockLight,

        '--text-primary': theme.other.textPrimaryLight,
        '--text-secondary': theme.other.textSecondaryLight,
    },
});