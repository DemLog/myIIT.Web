import React, {useEffect} from "react";
import {MainLayoutProps} from "./props";
import classes from "./MainLayout.module.css";

import {Box, Container} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Outlet} from "react-router-dom";

import {HeaderApp} from "@components/Other/HeaderApp";
import {LoaderScreen} from "@components/Other/Loader/LoaderScreen";
import {ProfileCard} from "@components/Main/ProfileCard";

export const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const [loaderVisible, {toggle: loaderToggle}] = useDisclosure(false);

    useEffect(() => {
        // setTimeout(() => loaderToggle(), 500);
    }, []);

    return (
        <Box className={classes.main_container}>
            <LoaderScreen visible={loaderVisible}/>
            <HeaderApp/>
            <Box className={classes.content} mx="xl" px="md">
                <Box className={classes.left_side} mr="md">
                    <ProfileCard />
                </Box>
                <Box className={classes.content_page}><Outlet/></Box>
            </Box>
        </Box>
    );
};