import React from "react";
import {MainLayoutProps} from "./MainLayout.types";
import classes from "./MainLayout.module.css";

import {Box} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import {observer} from "mobx-react";
import { Header } from "@components/UI";

const MainLayoutComponent: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    return (
        <Box className={classes.main_container}>
            <Header />
        </Box>
    );
};

export const MainLayout = observer(MainLayoutComponent);