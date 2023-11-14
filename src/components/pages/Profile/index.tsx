import React, {useEffect} from "react";
import {ProfilePageProps} from "./props";
import classes from "./ProfilePage.module.css";

import {Box, Grid} from "@mantine/core";
import {useDisclosure, useDocumentTitle, useMediaQuery} from "@mantine/hooks";

import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

import {NamePageBlock} from "@components/Other/NamePageBlock";

import accountIcon from "@assets/images/icons/account_circle.png";
import {ProfileCardBlock} from "@components/Profile/ProfileCardBlock";
import {ProfileDataBlock} from "@components/Profile/ProfileDataBlock";
import {ProfileRewardBlock} from "@components/Profile/ProfileRewardBlock";
import {ProfileLevelBlock} from "@components/Profile/ProfileLevelBlock";

const ProfilePageComponent: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)')

    const [loaderVisible, {toggle: loaderToggle}] = useDisclosure(false);

    const {navigationStore} = useStores();
    useDocumentTitle("Профиль - myIIT");

    useEffect(() => {
        navigationStore.setNamePage("Профиль");
        setTimeout(() => loaderToggle(), 100);
    }, []);

    return (
        <Box className={classes.main_container}>
            <Box className={classes.content} mt={matchesMobile ? "xs" : 0} mb={matchesMobile ? 62 : 0}>
                <Box className={classes.content_main}>
                    <Grid gutter="xs">
                        <Grid.Col><NamePageBlock title="Профиль" icon={accountIcon}/></Grid.Col>

                        <Grid.Col span={4}><ProfileCardBlock /></Grid.Col>
                        <Grid.Col span={8}><ProfileDataBlock /></Grid.Col>

                        <Grid.Col span={4}><ProfileRewardBlock /></Grid.Col>
                    </Grid>
                </Box>
                <Box className={classes.content_help_block} ml="md">
                    <ProfileLevelBlock />
                </Box>
            </Box>
        </Box>
    );
};

export const ProfilePage = observer(ProfilePageComponent);