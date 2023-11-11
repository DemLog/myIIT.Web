import React, {useEffect} from "react";
import {MainLayoutProps} from "./props";
import classes from "./MainLayout.module.css";

import {Box, Container, Stack} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {Outlet} from "react-router-dom";

import {HeaderApp} from "@components/Other/HeaderApp";
import {LoaderScreen} from "@components/Other/Loader/LoaderScreen";
import {ProfileCard} from "@components/Main/ProfileCard";
import {NavigationBlock} from "@components/Main/NavigationBlock";
import {FooterLinksBlock} from "@components/Main/FooterLinksBlock";
import {NavigationBlockTablet} from "@components/Main/NavigationBlockTablet";

export const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const [loaderVisible, {toggle: loaderToggle}] = useDisclosure(false);

    useEffect(() => {
        // setTimeout(() => loaderToggle(), 500);
    }, []);

    return (
        <Box className={classes.main_container}>
            <LoaderScreen visible={loaderVisible}/>
            <HeaderApp/>
            {!matchesPC && !matchesMobile &&
                <Box className={classes.left_side_tablet} py="xs" px={4}>
                    <NavigationBlockTablet />
                </Box>
            }
            <Box className={classes.content} mx={matchesPC ? "xl" : 0} px={matchesPC ? "md" : 0}>
                {matchesPC &&
                    <Box className={classes.left_side} mr="md">
                        <Stack>
                            <ProfileCard/>
                            <NavigationBlock />
                            <FooterLinksBlock />
                        </Stack>
                    </Box>
                }

                <Box className={classes.content_page} mr={!matchesMobile && !matchesPC ? "md" : 0}><Outlet/></Box>
            </Box>
        </Box>
    );
};