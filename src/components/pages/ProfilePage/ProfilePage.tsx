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
import { ProfileActionBlock, ProfileAvatarBlock, ProfileInfoBlock } from "@components/Profile";
import { ProfileActionBlockTablet } from "@components/Profile/ProfileActionBlock/ProfileActionBlockTablet";

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
                <Box className={classes.header_block}>
                    <Box className={classes.title_block}>
                        <TitleBlock title="Профиль" icon={profileIcon} />
                    </Box>
                    {(!matchesPC && !matchesMobile) && (
                        <Box className={classes.action_block} ml="md">
                            <ProfileActionBlockTablet />
                        </Box>
                    )}
                </Box>
                <Box className={classes.content_box} mt="md">
                    <XMasonry center={false} targetBlockWidth={matchesPC ? 237 : 267} smartUpdateCeil={1000}>
                        <XBlock width={1}>
                            <Box className={classes.profile_item} mb={16}>
                                <ProfileAvatarBlock />
                            </Box>
                        </XBlock>

                        <XBlock width={2}>
                            <Box className={classes.profile_item} ml={12} mb={16}>
                                <ProfileInfoBlock />
                            </Box>
                        </XBlock>
                    </XMasonry>
                </Box>
            </Box>
            {matchesPC && <Box className={classes.function_block} ml={matchesPC ? "lg" : "md"}>
                <ProfileActionBlock />
            </Box>}
        </Box>
    );
};

export const ProfilePage = observer(ProfilePageComponent);