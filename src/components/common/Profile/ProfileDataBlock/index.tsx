import React from "react";
import {ProfileDataBlockProps} from "./props";
import classes from "./ProfileDataBlock.module.css";

import {Box, Text} from "@mantine/core";
import {ProfileDataBlockItem} from "@components/Profile/ProfileDataBlock/ProfileDataBlockItem";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

const ProfileDataBlockComponent: React.FC<ProfileDataBlockProps> = (props: ProfileDataBlockProps) => {
    const {userStore} = useStores();
    const userData = userStore.getUser();

    return (
        <Box className={classes.main_container} px="lg" py="xs">
            <Box className={classes.header}>
                <Text c="#222222" fw={500} size="xl">Личные данные</Text>
            </Box>
            <Box className={classes.content} pt="xs" mx="xs">
                <ProfileDataBlockItem title="Отчество" value={userData?.patronymic} />
                <ProfileDataBlockItem title="Электронная почта" value={userData?.email} />
                <ProfileDataBlockItem title="Страна" value={userData?.country} />
                <ProfileDataBlockItem title="Статус" value={userData?.status} />
                <ProfileDataBlockItem title="Направление обучения" value={userData?.studyDirection} />
                <ProfileDataBlockItem title="Профиль" value={userData?.profile} />
            </Box>
        </Box>
    )
};

export const ProfileDataBlock = observer(ProfileDataBlockComponent);