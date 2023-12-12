import React from "react";
import { ProfileInfoBlockProps } from "./ProfileInfoBlock.types";
import classes from "./ProfileInfoBlock.module.css";

import { Block, Text } from "@components/UI";
import { Box, Skeleton } from "@mantine/core";
import { ProfileInfoBlockItem } from "./ProfileInfoBlockItem";

export const ProfileInfoBlock: React.FC<ProfileInfoBlockProps> = (props: ProfileInfoBlockProps) => {
    return (
        <Block title="Личный данные">
            <Box className={classes.content}>
                <ProfileInfoBlockItem title="Отчество" value={undefined}/>
                <ProfileInfoBlockItem title="Электронная почта"/>
                <ProfileInfoBlockItem title="Страна"/>
                <ProfileInfoBlockItem title="Статус"/>
                <ProfileInfoBlockItem title="Направление обучения"/>
                <ProfileInfoBlockItem title="Профиль"/>
            </Box>
        </Block>
    );
}