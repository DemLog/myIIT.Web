import React from "react";
import { ProfileInfoBlockProps } from "./ProfileInfoBlock.types";
import classes from "./ProfileInfoBlock.module.css";

import { Block, Text } from "@components/UI";
import { Box, Skeleton } from "@mantine/core";
import { ProfileInfoBlockItem } from "./ProfileInfoBlockItem";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

const ProfileInfoBlockComponent: React.FC<ProfileInfoBlockProps> = (props: ProfileInfoBlockProps) => {
    const { userStore } = useStores();
    console.log(userStore.user?.profileInfo.studyGroup)

    return (
        <Block title="Личный данные">
            <Box className={classes.content}>
                <ProfileInfoBlockItem title="Отчество" value={userStore.user?.patronymic} />
                <ProfileInfoBlockItem title="Электронная почта" value={userStore.user?.email} />
                <ProfileInfoBlockItem title="Страна" value={userStore.user?.country} />
                {userStore.user?.profileInfo.studyStatus && <ProfileInfoBlockItem title="Статус" value={userStore.user?.profileInfo.studyStatus} />}
                {userStore.user?.profileInfo.studyDirection && <ProfileInfoBlockItem title="Направление обучения" value={userStore.user?.profileInfo.studyDirection} />}
                {userStore.user?.profileInfo.studyProfile && <ProfileInfoBlockItem title="Профиль" value={userStore.user?.profileInfo.studyProfile} />}
                {userStore.user?.profileInfo.position && <ProfileInfoBlockItem title="Должность" value={userStore.user?.profileInfo.position} />}
            </Box>
        </Block>
    );
}

export const ProfileInfoBlock = observer(ProfileInfoBlockComponent);