import React, { Fragment } from "react";
import { ProfileAvatarBlockProps } from "./ProfileAvatarBlock.types";
import classes from "./ProfileAvatarBlock.module.css";

import { Block, Text } from "@components/UI";
import { Box, Skeleton, Button } from "@mantine/core";
import { getStyleSize } from "@styles/core/helpers";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

export const ProfileAvatarBlock: React.FC<ProfileAvatarBlockProps> = (props: ProfileAvatarBlockProps) => {
    return (
        <Block>
            <Box className={classes.content}>
                <Box className={classes.avatar_block} mb="sm">
                    <Skeleton h="123px" w="123px" circle />
                </Box>
                <Box className={classes.name_block} mb="lg">
                    <Skeleton h="24px" mb={4} />
                    <Skeleton h="18px" w="67px" />
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