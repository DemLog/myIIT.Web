import React, { useEffect } from "react";
import { ProfilePageProps } from "./ProfilePage.types";
import classes from "./ProfilePage.module.css";

import { Box } from "@mantine/core";
import { useDocumentTitle, useMediaQuery } from "@mantine/hooks";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

import { XBlock, XMasonry } from "react-xmasonry";
import { TitleBlock } from "@components/UI";

import profileIcon from "@assets/images/icons/w500/account_circle.svg";
import { ProfileActionBlock } from "@components/Profile";

const ProfilePageComponent: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const { navigationStore } = useStores();

    useDocumentTitle("Профиль - myIIT");
    useEffect(() => {
        navigationStore.setNamePage("Профиль");
    }, []);

    return (
        <Box className={classes.main_container}>
            <Box className={classes.content}>
                <TitleBlock title="Профиль" icon={profileIcon}/>
            </Box>
            <Box className={classes.function_block} ml="lg">
                <ProfileActionBlock />
            </Box>
        </Box>
    );
};

export const ProfilePage = observer(ProfilePageComponent);