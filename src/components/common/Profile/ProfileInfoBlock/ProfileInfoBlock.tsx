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

    return (
        <Block title="Личный данные">
            <Box className={classes.content}>
                <ProfileInfoBlockItem title="Отчество" value={userStore.getUser()?.patronymic} />
                <ProfileInfoBlockItem title="Электронная почта" value={userStore.getUser()?.email} />
                <ProfileInfoBlockItem title="Страна" value={userStore.getUser()?.country} />
                <ProfileInfoBlockItem title="Статус" value={userStore.getUser()?.status} />
                <ProfileInfoBlockItem title="Направление обучения" value={userStore.getUser()?.studyDirection} />
                <ProfileInfoBlockItem title="Профиль" value={userStore.getUser()?.profile} />
            </Box>
        </Block>
    );
}

export const ProfileInfoBlock = observer(ProfileInfoBlockComponent);