import React from "react";
import { HeaderProfileButtonProps } from "./HeaderProfileButton.types";
import classes from "./HeaderProfileButton.module.css";

import { Box, Button, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ReactSVG } from "react-svg";
import expandMoreIcon from "@assets/images/icons/w200/expand_more_fill.svg";

export const HeaderProfileButton: React.FC<HeaderProfileButtonProps> = (props: HeaderProfileButtonProps) => {
    const [openedPopover, { toggle: togglePopover }] = useDisclosure(false);

    return (
        <Button className={classes.main} variant="transparent" onClick={togglePopover}>
            <Box className={classes.avatar_block}>
                <Skeleton height={36} circle />
            </Box>
            <Box className={classes.name_block} ml="xs">
                <Skeleton height={14} width="135px" radius="lg" mb={2}/>
                <Skeleton height={12} width="43px" radius="lg" />
            </Box>
            <Box className={classes.expand_block} ml={2}>
                <ReactSVG className={classes.expand_icon} src={expandMoreIcon} data-active={openedPopover} />
            </Box>
        </Button>
    );
};