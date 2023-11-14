import React from "react";
import {ProfileDataBlockProps} from "./props";
import classes from "./ProfileDataBlock.module.css";

import {Box, Text} from "@mantine/core";
import {ProfileDataBlockItem} from "@components/Profile/ProfileDataBlock/ProfileDataBlockItem";

export const ProfileDataBlock: React.FC<ProfileDataBlockProps> = (props: ProfileDataBlockProps) => {

    return (
        <Box className={classes.main_container} px="lg" py="xs">
            <Box className={classes.header}>
                <Text c="#222222" fw={500} size="xl">Личные данные</Text>
            </Box>
            <Box className={classes.content} pt="xs" mx="xs">
                <ProfileDataBlockItem title="Отчество" value="Максимович" />
                <ProfileDataBlockItem title="Электронная почта" value="lohebanyi@mail.ru" />
                <ProfileDataBlockItem title="Страна" value="Россия" />
                <ProfileDataBlockItem title="Статус" value="Зачислен" />
                <ProfileDataBlockItem title="Направление обучения" value="Разработка программно-информационных систем" />
                <ProfileDataBlockItem title="Профиль" value="09.03.04 Программная инженерия" />
            </Box>
        </Box>
    )
};