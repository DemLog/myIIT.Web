import React from "react";
import classes from "./WidgetProfile.module.css";

import { Widget, Text } from "@components/UI";
import { ActionIcon, Avatar, Box, Image, Skeleton } from "@mantine/core";

import { ReactSVG } from "react-svg";
import expandIcon from "@assets/images/icons/w200/expand_more_fill.svg";

import { useNavigate } from "react-router";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

const WidgetProfileComponent: React.FC = () => {
    const navigation = useNavigate();

    const { userStore } = useStores();

    return (
        <Widget
            backgroundColor="white"
        >
            <Box className={classes.content}>
                <Box className={classes.info_box} px="md">
                    <Box className={classes.avatar_box}>
                        {/* <Skeleton h="46px" w="46px" circle /> */}
                        <Avatar size={46} src={userStore.getUser()?.avatar}/>
                    </Box>
                    <Box className={classes.name_box} ml="xs">
                        {/* <Skeleton h="20px" w="178px" /> */}
                        <Text size="large" weight="regular">{userStore.getUser()?.lastName} {userStore.getUser()?.firstName}</Text>
                        {/* <Skeleton h="14px" w="50px" /> */}
                        <Text size="small" weight="thin" color={getStyleColor("text-secondary")}>{userStore.getUser()?.studyGroup}</Text>
                    </Box>
                </Box>
                <Box className={classes.button_box}>
                    <ActionIcon variant="transparent" onClick={() => navigation("/profile")}>
                        <ReactSVG className={classes.icon} src={expandIcon} />
                    </ActionIcon>
                </Box>
            </Box>
        </Widget>
    )
}

export const WidgetProfile = observer(WidgetProfileComponent);