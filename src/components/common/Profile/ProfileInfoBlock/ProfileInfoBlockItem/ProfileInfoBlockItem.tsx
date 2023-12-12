import React from "react";
import { ProfileInfoBlockItemProps } from "./ProfileInfoBlockItem.types";
import classes from "./ProfileInfoBlockItem.module.css";

import { Text } from "@components/UI";
import { Box, Skeleton } from "@mantine/core";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

export const ProfileInfoBlockItem: React.FC<ProfileInfoBlockItemProps> = (props: ProfileInfoBlockItemProps) => {
    return (
        <Box className={classes.content} mb="xs">
            <Box className={classes.title_box} mb={2}>
                <Text size="small" weight="regular" color={getStyleColor("text-secondary")}>{props.title}</Text>
            </Box>
            <Box className={classes.value_box} ml="xs">
                {props.value ?
                    <Text size="small" weight="medium" color={getStyleColor("text-primary")}>{props.value}</Text> :
                    <Skeleton h="16px" w="60%" radius="lg"/>
                }
            </Box>
        </Box>
    );
}