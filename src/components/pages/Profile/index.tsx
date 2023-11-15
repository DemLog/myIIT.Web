import React, {Fragment, ReactNode, useEffect} from "react";
import {ProfilePageProps} from "./props";
import classes from "./ProfilePage.module.css";

import {Box} from "@mantine/core";
import {useDisclosure, useDocumentTitle, useMediaQuery} from "@mantine/hooks";

import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

import {NamePageBlock} from "@components/Other/NamePageBlock";
import {XBlock, XMasonry} from "react-xmasonry";

import accountIcon from "@assets/images/icons/account_circle.png";
import {ProfileCardBlock} from "@components/Profile/ProfileCardBlock";
import {ProfileDataBlock} from "@components/Profile/ProfileDataBlock";
import {ProfileLevelBlock} from "@components/Profile/ProfileLevelBlock";
import {ProfileActionBlock} from "@components/Profile/ProfileActionBlock";

const ProfilePageComponent: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
    const matchesPC = useMediaQuery('(min-width: 1280px)');
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const matchesBoxMin = useMediaQuery('(min-width: 900px)');
    const matchesBoxMax = useMediaQuery('(max-width: 1390px)');

    const [loaderVisible, {toggle: loaderToggle}] = useDisclosure(false);

    const {navigationStore} = useStores();
    useDocumentTitle("Профиль - myIIT");

    const swapComponents = (firstC: ReactNode, secondC: ReactNode, condition: boolean) => (
        condition ? [secondC, firstC] : [firstC, secondC]
    );

    useEffect(() => {
        navigationStore.setNamePage("Профиль");
        setTimeout(() => loaderToggle(), 100);
    }, []);

    return (
        <Box className={classes.main_container}>
            <Box className={classes.content} mt={matchesMobile ? "xs" : 0} mb={matchesMobile ? 62 : 0}>
                <Box className={classes.content_main}>
                    <Box className={classes.header} mb="xs" mr="xs">
                        <NamePageBlock title="Профиль" icon={accountIcon}/>
                    </Box>
                    <XMasonry center={false} maxColumns={10} targetBlockWidth={300} smartUpdateCeil={1000}>
                        <XBlock width={1}>
                            <Box mr={matchesMobile ? 0 : "xs"} mb="xs">
                                <ProfileCardBlock/>
                            </Box>

                            {!matchesPC && !matchesMobile &&
                                <Box mr={matchesMobile ? 0 : "xs"} mb="xs">
                                <ProfileActionBlock />
                            </Box>
                            }
                        </XBlock>

                        {swapComponents(
                            <XBlock width={matchesBoxMin ? 2 : 3}>
                                <Box mr={matchesMobile ? 0 : "xs"} mb="xs">
                                    <ProfileDataBlock/>
                                </Box>
                            </XBlock>,
                            <XBlock width={1}>
                                <Box mr={matchesMobile ? 0 : "xs"} mb="xs">
                                    <ProfileLevelBlock/>
                                </Box>
                            </XBlock>,
                            (!matchesMobile && !matchesPC && !matchesBoxMin || matchesPC && matchesBoxMax) as boolean
                        )}


                    </XMasonry>
                </Box>
                {matchesPC &&
                    <Box className={classes.content_help_block}>
                        <ProfileActionBlock/>
                    </Box>
                }
            </Box>
        </Box>
    );
};

export const ProfilePage = observer(ProfilePageComponent);