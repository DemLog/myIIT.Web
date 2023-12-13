import React from "react";
import { HeaderProfileButtonProps } from "./HeaderProfileButton.types";
import classes from "./HeaderProfileButton.module.css";

import { Avatar, Box, Button, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeaderProfileMenu } from "@components/Menu";

import { ReactSVG } from "react-svg";
import expandMoreIcon from "@assets/images/icons/w200/expand_more_fill.svg";
import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { Text } from "@components/UI";

const HeaderProfileButtonComponent: React.FC<HeaderProfileButtonProps> = (props: HeaderProfileButtonProps) => {
    const [openedPopover, { toggle: togglePopover }] = useDisclosure(false);

    const { userStore } = useStores();

    return (
        <HeaderProfileMenu>
            <Button className={classes.main} variant="transparent" onClick={togglePopover}>
                <Box className={classes.avatar_block}>
                    <Avatar size={36} src={userStore.getUser()?.avatar}/>
                    
                </Box>
                <Box className={classes.name_block} ml="xs">
                <Text size="16px" weight="regular">{userStore.getUser()?.lastName} {userStore.getUser()?.firstName}</Text>
                <Text ta="left" size="10px" weight="thin">{userStore.getUser()?.studyGroup}</Text>
                </Box>
                <Box className={classes.expand_block} ml={2}>
                    <ReactSVG className={classes.expand_icon} src={expandMoreIcon} data-active={openedPopover} />
                </Box>
            </Button>
        </HeaderProfileMenu>
    );
};

export const HeaderProfileButton = observer(HeaderProfileButtonComponent);