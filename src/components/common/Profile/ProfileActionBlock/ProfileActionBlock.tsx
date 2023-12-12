import React, { Fragment } from "react";
import { ProfileActionBlockProps } from "./ProfileActionBlock.types";
import classes from "./ProfileActionBlock.module.css";

import { Block, Text } from "@components/UI";
import { Box, Button } from "@mantine/core";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

import { ReactSVG } from "react-svg";
import editIcon from "@assets/images/icons/w400/edit_square.svg";
import shareIcon from "@assets/images/icons/w400/share.svg";

export const ProfileActionBlock: React.FC<ProfileActionBlockProps> = (props: ProfileActionBlockProps) => {
    return (
        <Block title="Действия">
            <Box className={classes.content}>
                <Button classNames={{inner: classes.button_inner, label: classes.button_inner}} size="xs" color={getStyleColor("background-dark")} fullWidth>
                    <ReactSVG className={classes.icon} src={editIcon}/>
                    <Text size="extra-small" weight="regular">Редактировать</Text>
                </Button>
                <Button classNames={{inner: classes.button_inner, label: classes.button_inner}} size="xs" color={getStyleColor("background-dark")} fullWidth>
                    <ReactSVG className={classes.icon} src={shareIcon}/>
                    <Text size="extra-small" weight="regular">Поделиться</Text>
                </Button>
            </Box>
        </Block>
    );
}