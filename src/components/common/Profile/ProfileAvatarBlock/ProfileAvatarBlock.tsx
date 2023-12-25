import React, { Fragment } from "react";
import { ProfileAvatarBlockProps } from "./ProfileAvatarBlock.types";
import classes from "./ProfileAvatarBlock.module.css";

import { Block, Text } from "@components/UI";
import { Box, Skeleton, Button, Avatar } from "@mantine/core";
import { getStyleSize } from "@styles/core/helpers";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";
import { useMediaQuery } from "@mantine/hooks";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";

const ProfileAvatarBlockComponent: React.FC<ProfileAvatarBlockProps> = (props: ProfileAvatarBlockProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const { userStore } = useStores();

    return (
        <Block>
            <Box className={classes.content}>
                <Box className={classes.avatar_block} mb={matchesMobile ? 0 : "sm"}>
                    <Avatar size={matchesMobile ? "180px" : "120px"} src={"https://api.myiit.ru" + userStore.user?.avatar} />
                </Box>
                <Box className={classes.name_block} mb="lg">
                    {/* <Skeleton h="24px" mb={4} radius="lg" /> */}
                    <Text size="large" weight="regular">{userStore.user?.lastName} {userStore.user?.firstName}</Text>
                    {/* <Skeleton h="18px" w="67px" radius="lg" /> */}
                    <Text size="medium" weight="thin" color={getStyleColor("text-secondary")}>{userStore.user?.profileInfo.studyGroup}</Text>
                </Box>
                <Box className={classes.button_block}>
                    <Button classNames={{ root: classes.button_root }} color={getStyleColor("primary")} variant="outline" radius="lg" size={getStyleSize("small")}>
                        <Text size="small" weight="medium" color={getStyleColor("primary-light")}>Обновить фото</Text>
                    </Button>
                </Box>
            </Box>
        </Block>
    );
}

export const ProfileAvatarBlock = observer(ProfileAvatarBlockComponent);