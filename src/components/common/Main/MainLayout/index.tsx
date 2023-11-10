import React, {useEffect} from "react";
import {MainLayoutProps} from "./props";
import classes from "./MainLayout.module.css";

import {Box} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Outlet} from "react-router-dom";

import {HeaderApp} from "@components/Other/HeaderApp";
import {LoaderScreen} from "@components/Other/Loader/LoaderScreen";

export const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const [loaderVisible, { toggle: loaderToggle }] = useDisclosure(true);

    useEffect(() => {
        setTimeout(() => loaderToggle(), 500);
    }, []);

    return (
        <Box className={classes.main_container}>
            <LoaderScreen visible={loaderVisible} />
            <HeaderApp />
            <Outlet />
        </Box>
    );
};