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
import { ProfileAvatarBlock } from "@components/Profile/ProfileAvatarBlock";

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
                <TitleBlock title="Профиль" icon={profileIcon} />
                <Box className={classes.content_box} mt="md">
                    <XMasonry center={false} targetBlockWidth={230} smartUpdateCeil={1000}>
                        <XBlock width={1}>
                            <Box className={classes.profile_item} mx={matchesMobile ? 0 : 8} mb={16}>
                                <ProfileAvatarBlock />
                            </Box>
                        </XBlock>
                    </XMasonry>
                </Box>
            </Box>
            <Box className={classes.function_block} ml="lg">
                <ProfileActionBlock />
            </Box>
        </Box>
    );
};

export const ProfilePage = observer(ProfilePageComponent);