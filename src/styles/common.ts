import {MantineThemeOverride, PaperStylesParams} from "@mantine/core";

export const CommonStyles: MantineThemeOverride = {
    globalStyles: (theme) => ({
        body: {
            backgroundColor: theme.colorScheme === 'light' ? "#F7F7F7" : "#141414",
            overflowY: "hidden"
        }
    }),
    components: {
        Paper: {
            styles: (theme, params: PaperStylesParams, {variant}) => ({
                root: {
                    backgroundColor: theme.colorScheme === 'light' ? "#FFF" : "#222"
                }
            })
        }
    }
};