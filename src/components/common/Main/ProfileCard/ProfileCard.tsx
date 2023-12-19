import React from "react";
import { ProfileCardProps } from "./ProfileCard.types";
import classes from "./ProfileCard.module.css";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { Block, Text } from "@components/UI";
import { Avatar, Box } from "@mantine/core";
import { ReactSVG } from "react-svg";
import expandIcon from "@assets/images/icons/w200/expand_more_fill.svg";
import { useNavigate } from "react-router-dom";

const ProfileCardComponent: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { userStore } = useStores();
    const userData = userStore.getUser();

    const navigation = useNavigate();

    const handleClickProfile = () => {
        navigation("/profile");
    };

    return (
        <Block onClick={handleClickProfile}>
            <Box className={classes.action_block}>
                    <ReactSVG className={classes.icon} src={expandIcon} />
                </Box>
            <Box className={classes.content}>
                <Box className={classes.avatar_block}>
                    <Avatar src={userData?.avatar} size="102px" />
                </Box>
                <Box className={classes.name_block} mt="xs">
                    <Text size="medium" weight="regular" ta="center">{userData?.lastName} {userData?.firstName}</Text>
                    <Text size="extra-small" weight="light" color="text-secondary" ta="center" mt={2}>{userData?.studyGroup}</Text>
                </Box>
            </Box>
        </Block>
    )
};

export const ProfileCard = observer(ProfileCardComponent);