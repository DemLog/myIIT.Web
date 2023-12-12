import React from "react";
import {ProfileCardProps} from "./props";
import classes from "./ProfileCard.module.css";

import {Avatar, Box, Image, Text} from "@mantine/core";

import verificationIcon from "@assets/images/icons/verification_icon.png";
import {ProfileCardLevel} from "@components/Main/ProfileCard/ProfileCardLevel";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

const ProfileCardComponent: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const {userStore} = useStores();
    const userData = userStore.getUser();

    return (
        <Box className={classes.main_container} p="md">
            <Box className={classes.content} py="md">
                <Box className={classes.profile_block} px="md">
                    <Avatar color="black" radius="xl" size="lg" src={userData?.avatar}>{userData?.lastName[0]}{userData?.firstName[0]}</Avatar>
                    <Box className={classes.profile_name_block} ml="xs">
                        <Box className={classes.profile_name} mb={2}>
                            <Text fw={400} size="20px" c="#282828">{userData?.lastName} {userData?.firstName}</Text>
                            {/*<Image src={verificationIcon} h="20px" w="auto" fit="contain" ml={6}/>*/}
                        </Box>
                        <Text fw={200} size="15px" c="#282828">{userData?.studyGroup}</Text>
                    </Box>
                </Box>
                <Box className={classes.level_block} px="md" mt="sm">
                    <Text fw={100}>Уровень пользователя:</Text>
                    <ProfileCardLevel level={5} progress={60}/>
                </Box>
            </Box>
        </Box>
    )
};

export const ProfileCard = observer(ProfileCardComponent);