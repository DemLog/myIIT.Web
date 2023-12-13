import React, { useEffect } from "react";
import { MainLayoutProps } from "./MainLayout.types";
import classes from "./MainLayout.module.css";

import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Header } from "@components/Main";
import { Container } from "@components/UI";
import { NavigationDesktop, NavigationMobile, NavigationTablet } from "../Navigation";

import { observer } from "mobx-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStores } from "@core/hooks";
import apiService from "@core/services/apiService";
import { IUserProfile } from "@models/user/IUserProfile";

const MainLayoutComponent: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const navigate = useNavigate();
    const { userStore } = useStores();

    useEffect(() => {
        const loadingData = async () => {
            if (!userStore.getSession()) {
                navigate("/login");
            }

            if (!userStore.getUser()) {
                const data = await apiService({ method: "GET", url: "profile.getUser", token: userStore.getSession()?.token });
                if (data?.response_code === 200) {
                    userStore.setUser(data.data as IUserProfile);
                } else {
                    navigate("/login");
                }
            }
        };

        loadingData();

    }, []);

    return (
        <Box className={classes.main_container}>
            <Header />
            <Box className={classes.main_block}>
                <Container>
                    <Box className={classes.main_side} mt={matchesMobile ? 0 : "xs"} px={matchesMobile ? 0 : "xs"}>
                        {!matchesMobile && <Box className={classes.left_side_block}>
                            {matchesPC ? <NavigationDesktop /> : <NavigationTablet />}
                        </Box>}
                        <Box className={classes.right_side_block} ml={matchesMobile ? 0 : "lg"} mb="52px">
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