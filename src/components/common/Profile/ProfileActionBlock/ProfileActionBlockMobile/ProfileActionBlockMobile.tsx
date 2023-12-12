import React, { Fragment } from "react";
import { ProfileActionBlockMobileProps } from "./ProfileActionBlockMobile.types";
import classes from "./ProfileActionBlockMobile.module.css";

import { Block, Text } from "@components/UI";
import { ActionIcon, Box, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

import { ReactSVG } from "react-svg";
import editIcon from "@assets/images/icons/w400/edit_square.svg";
import shareIcon from "@assets/images/icons/w400/share.svg";

export const ProfileActionBlockMobile: React.FC<ProfileActionBlockMobileProps> = (props: ProfileActionBlockMobileProps) => {
    return (
            <Box className={classes.content} p="xs">
                <ActionIcon size="40px" radius="xl" color={getStyleColor("background-dark")}>
                    <ReactSVG className={classes.icon} src={editIcon} />
                </ActionIcon>
                <ActionIcon size="40px" radius="xl" color={getStyleColor("background-dark")}>
                    <ReactSVG className={classes.icon} src={shareIcon} />
                </ActionIcon>
            </Box>
    );
}