import React, { Fragment } from "react";
import { ProfileActionBlockTabletProps } from "./ProfileActionBlockTablet.types";
import classes from "./ProfileActionBlockTablet.module.css";

import { Block, Text } from "@components/UI";
import { ActionIcon, Box, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

import { ReactSVG } from "react-svg";
import editIcon from "@assets/images/icons/w400/edit_square.svg";
import shareIcon from "@assets/images/icons/w400/share.svg";

export const ProfileActionBlockTablet: React.FC<ProfileActionBlockTabletProps> = (props: ProfileActionBlockTabletProps) => {
    return (
        <Block>
            <Box className={classes.content}>
                <ActionIcon size="40px" radius="xl" color={getStyleColor("background-dark")}>
                    <ReactSVG className={classes.icon} src={editIcon} />
                </ActionIcon>
                <ActionIcon size="40px" radius="xl" color={getStyleColor("background-dark")}>
                    <ReactSVG className={classes.icon} src={shareIcon} />
                </ActionIcon>
            </Box>
        </Block>
    );
}