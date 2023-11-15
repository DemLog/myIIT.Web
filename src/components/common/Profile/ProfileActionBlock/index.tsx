import React from "react";
import {ProfileActionBlockProps} from "./props";
import classes from "./ProfileActionBlock.module.css";

import {Box, Image, NavLink, Text} from "@mantine/core";

import editIcon from "@assets/images/icons/edit_square.png";
import shareIcon from "@assets/images/icons/share.png";

export const ProfileActionBlock: React.FC<ProfileActionBlockProps> = (props: ProfileActionBlockProps) => {

    return (
        <Box className={classes.main_container} p="xs">
            <Box className={classes.header}>
                <Text c="#222222" fw={500} size="xl">Действия</Text>
            </Box>
            <Box className={classes.content} pb="xs">
                <NavLink
                    className={classes.button_root}
                    label={<Text fw={500} size="15px" c="#8B8B8B">Редактировать</Text>}
                    leftSection={<Image className={classes.image_icon} h={25} w="auto" fit="contain" src={editIcon}/>}
                    mb={6}
                />

                <NavLink
                    classNames={{root: classes.button_root}}
                    label={<Text fw={500} size="15px" c="#8B8B8B">Поделиться</Text>}
                    leftSection={<Image className={classes.image_icon} h={25} w="auto" fit="contain" src={shareIcon}/>}
                />
            </Box>
        </Box>
    )
};