import React, {Fragment, useEffect} from "react";
import {MainLayoutProps} from "./props";
import classes from "./MainLayout.module.css";

import {Box, Container, Stack} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {Outlet, useNavigate} from "react-router-dom";

import {HeaderApp} from "@components/Other/HeaderApp";
import {LoaderScreen} from "@components/Other/Loader/LoaderScreen";
import {ProfileCard} from "@components/Main/ProfileCard";
import {NavigationBlock} from "@components/Main/NavigationBlock";
import {FooterLinksBlock} from "@components/Main/FooterLinksBlock";
import {NavigationBlockTablet} from "@components/Main/NavigationBlockTablet";
import {BottomBar} from "@components/Main/BottomBar";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";
import apiService from "@core/services/apiService";
import {IUserProfile} from "@models/user/IUserProfile";

const MainLayoutComponent: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const [loaderVisible, {open: loaderToggle}] = useDisclosure(false);

    const {userStore} = useStores();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => loaderToggle(), 500);

        const loadingData = async () => {
            if (!userStore.getSession()) {
                navigate("/login");
            }

            if (!userStore.getUser()) {
                const data = await apiService({method: "GET", url: "profile.getUser", token: userStore.getSession()?.token});
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
            <LoaderScreen visible={!loaderVisible}/>
            {loaderVisible && <Fragment>
                <HeaderApp/>
                {!matchesPC && !matchesMobile &&
                    <Box className={classes.left_side_tablet} py="xs" px={4}>
                        <NavigationBlockTablet/>
                    </Box>
                }
                <Box className={classes.content} mx={matchesPC ? "xl" : 0} px={matchesPC ? "md" : 0}>
                    {matchesPC &&
                        <Box className={classes.left_side} mr="md">
                            <Stack>
                                <ProfileCard/>
                                <NavigationBlock/>
                                <FooterLinksBlock/>
                            </Stack>
                        </Box>
                    }

                    <Box className={classes.content_page} mr={!matchesMobile && !matchesPC ? "md" : 0}><Outlet/></Box>
                </Box>
                {matchesMobile && <BottomBar/>}
            </Fragment>}
        </Box>
    );
};

export const MainLayout = observer(MainLayoutComponent);