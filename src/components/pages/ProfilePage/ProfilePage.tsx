import React, { useEffect, useState } from "react";
import { ProfilePageProps } from "./ProfilePage.types";
import classes from "./ProfilePage.module.css";

import { Box, Divider } from "@mantine/core";
import { useDocumentTitle, useMediaQuery } from "@mantine/hooks";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

import { XBlock, XMasonry } from "react-xmasonry";
import { TitleBlock } from "@components/UI";

import profileIcon from "@assets/images/icons/w500/account_circle.svg";
import { ProfileActionBlock, ProfileAvatarBlock, ProfileInfoBlock } from "@components/Profile";
import { ProfileActionBlockTablet } from "@components/Profile/ProfileActionBlock/ProfileActionBlockTablet/ProfileActionBlockTablet";
import { ProfileActionBlockMobile } from "@components/Profile/ProfileActionBlock";

import badgeIcon from "@assets/images/icons/w200/badge.svg";
import { CarouselTabType } from "@components/UI/CarouselTabs/CarouselTabs.types";
import { CarouselTabs, CarouselTabsBlock } from "@components/UI/CarouselTabs";

const tabsList: CarouselTabType[] = [
    {
        value: "info",
        label: "Информация",
        icon: badgeIcon
    }
];

const ProfilePageComponent: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const [activeTab, setActiveTab] = useState<string>("info");

    const { navigationStore } = useStores();

    useDocumentTitle("Профиль - myIIT");
    useEffect(() => {
        navigationStore.setNamePage("Профиль");
    }, []);

    return (
        <Box className={classes.main_container}>
            <Box className={classes.content}>
                {!matchesMobile && <Box className={classes.header_block}>
                    <Box className={classes.title_block}>
                        <TitleBlock title="Профиль" icon={profileIcon} />
                    </Box>
                    {(!matchesPC && !matchesMobile) && (
                        <Box className={classes.action_block} ml="md">
                            <ProfileActionBlockTablet />
                        </Box>
                    )}
                </Box>}
                <Box className={classes.content_box} mt={matchesMobile ? 0 : "md"}>
                    <XMasonry center={false} targetBlockWidth={matchesPC ? 237 : 267} smartUpdateCeil={1000}>
                        <XBlock width={matchesMobile ? 2 : 1}>
                            {matchesMobile && <Box className={classes.profile_item}>
                                <ProfileActionBlockMobile />
                            </Box>}
                            <Box className={classes.profile_item} mb={16}>
                                <ProfileAvatarBlock />
                            </Box>
                        </XBlock>

                        {!matchesMobile && <XBlock width={2}>
                            <Box className={classes.profile_item} ml={12} mb={16}>
                                <ProfileInfoBlock />
                            </Box>
                        </XBlock>}

                        {matchesMobile && <XBlock width={2}>
                            <Box className={classes.profile_tabs} mb={16} p="sm">
                                <CarouselTabs tabs={tabsList} activeTab={activeTab} onTabChange={setActiveTab} />
                                <Box className={classes.profile_tabs_block} mt={46}>
                                    <Divider mb="xs"/>
                                    <CarouselTabsBlock activeTab={activeTab}>
                                        [
                                        <Box value="info">
                                            <ProfileInfoBlock />
                                        </Box>
                                        ]
                                    </CarouselTabsBlock>
                                </Box>

                            </Box>
                        </XBlock>}
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