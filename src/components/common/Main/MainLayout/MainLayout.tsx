import React from "react";
import {MainLayoutProps} from "./MainLayout.types";
import classes from "./MainLayout.module.css";

import {Box} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import { Header } from "@components/Main";
import { Container } from "@components/UI";
import { NavigationDesktop, NavigationMobile, NavigationTablet } from "../Navigation";

import {observer} from "mobx-react";
import { Outlet } from "react-router-dom";

const MainLayoutComponent: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    return (
        <Box className={classes.main_container}>
            <Header />
            <Box className={classes.main_block}>
                <Container>
                    <Box className={classes.main_side} mt="xs" px={matchesMobile ? 0 : "xs"}>
                        {!matchesMobile && <Box className={classes.left_side_block}>
                            {matchesPC ? <NavigationDesktop /> : <NavigationTablet />}
                        </Box>}
                        <Box className={classes.right_side_block} ml={matchesMobile ? 0 : "lg"}>
                            <Outlet />
                        </Box>
                    </Box>
                </Container>
            </Box>
            {matchesMobile && <NavigationMobile />}
        </Box>
    );
};

export const MainLayout = observer(MainLayoutComponent);