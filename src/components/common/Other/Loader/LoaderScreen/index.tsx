import React from "react";
import {LoaderScreenProps} from "./props";
import classes from "./LoaderScreen.module.css";

import {Loader, LoadingOverlay, MantineProvider} from "@mantine/core";

import {MyIITLoader} from "@components/Other/Loader/MyIITLoader";

export const LoaderScreen: React.FC<LoaderScreenProps> = (props: LoaderScreenProps) => {

    return (
        <MantineProvider theme={{
            components: {
                Loader: Loader.extend({
                    defaultProps: {
                        loaders: {
                            ...Loader.defaultLoaders,
                            custom: MyIITLoader
                        }, type: 'custom'
                    }
                })
            }
        }}> <LoadingOverlay classNames={{overlay: classes.main_container}} {...props} zIndex={1000}
                            overlayProps={{backgroundOpacity: 1, zIndex: 10000000}}
                            loaderProps={{type: 'custom', size: "80px"}}/>
        </MantineProvider>

    )
};