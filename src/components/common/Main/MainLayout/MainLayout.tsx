import React, { useEffect } from "react";
import { MainLayoutProps } from "./MainLayout.types";
import classes from "./MainLayout.module.css";

import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { FooterLinksBlock, Header, ProfileCard } from "@components/Main";
import { Container } from "@components/UI";
import { NavigationDesktop, NavigationMobile, NavigationTablet } from "../Navigation";

import { observer } from "mobx-react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStores } from "@core/hooks";
import apiService from "@core/services/apiService";
import { IUserProfile } from "@models/user/IUserProfile";
import { toast } from "react-toastify";

import bgImage1 from "@assets/images/bg-image-1.png";
import bgImage2 from "@assets/images/bg-image-2.png";

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
                    // toast.success("Вход успешно выполнен!");
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
            <Box className={classes.main_block} style={{
                backgroundImage: `url(${bgImage1}), url(${bgImage2})`
            }}>
                <Container>
                    <Box className={classes.main_side} my={matchesMobile ? 0 : "lg"} px="xs">
                        {matchesPC && <Box className={classes.left_side_block}>
                            <Box className={classes.left_side_main}>
                                <ProfileCard />
                                <NavigationDesktop />
                            </Box>
                            <Box className={classes.left_side_footer}>
                                {/* <FooterLinksBlock /> */}
                            </Box>
                        </Box>}
                        <Box className={classes.right_side_block} mb="52px" pl={26}>
                            <Box className={classes.right_side_main} p="sm">
                                <Outlet />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            {matchesMobile && <NavigationMobile />}
        </Box>
    );
};

export const MainLayout = observer(MainLayoutComponent);