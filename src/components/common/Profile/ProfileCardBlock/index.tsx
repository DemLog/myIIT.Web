import React, {Fragment} from "react";
import {ProfileCardBlockProps} from "./props";
import classes from "./ProfileCardBlock.module.css";

import {Avatar, Box, Button, Image, Text} from "@mantine/core";

import tohaImage from "@assets/images/toha.jpg";
import verificationIcon from "@assets/images/icons/verification_icon.png";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

const ProfileCardBlockComponent: React.FC<ProfileCardBlockProps> = (props: ProfileCardBlockProps) => {
    const {userStore} = useStores();
    const userData = userStore.getUser();

    return (
        <Box className={classes.main_container} p="lg">
            <Box className={classes.content} pt="xs">
                <Box className={classes.image_box}>
                    <Avatar size={180} src={userData?.avatar}>{!userData?.avatar && <Fragment>{userData?.lastName[0]}{userData?.firstName[0]}</Fragment>}</Avatar>
                </Box>
                <Box className={classes.name_box} mt="sm">
                    <Box className={classes.name_main} mb={7}>
                        <Text c="#535353" fw={500} size="130%">{userData?.lastName} {userData?.firstName}</Text>
                        {/*<Image ml={5} h={28} w="auto" fit="contain" src={verificationIcon} />*/}
                    </Box>
                    <Text c="#535353" fw={200} size="18px">{userData?.studyGroup}</Text>
                </Box>
                <Box className={classes.action_box} mt="lg">
                    <Button className={classes.update_photo_button} radius="xl">Обновить фото</Button>
                </Box>
            </Box>
        </Box>
    )
};

export const ProfileCardBlock = observer(ProfileCardBlockComponent);