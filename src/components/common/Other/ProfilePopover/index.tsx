import React from "react";
import {ProfilePopoverProps} from "./props";
import classes from "./ProfilePopover.module.css";

import {Box, Image, Popover, Skeleton} from "@mantine/core";

import expandMoreFillIcon from "@assets/images/icons/expand_more_fill.png";

export const ProfilePopover: React.FC<ProfilePopoverProps> = (props: ProfilePopoverProps) => {
    return (
        <Popover>
            <Popover.Target>
                <Box className={classes.popover_main}>
                    <Skeleton height={42} circle />
                    <Box className={classes.popover_name_block} ml="xs">
                        <Skeleton height={14} w={140} radius="xl" />
                        <Skeleton height={10} w={50} radius="xl" mt={2} />
                    </Box>
                    <Box className={classes.popover_expand_more_block} ml={2}>
                        <Image h={28} w="auto" fit="contain" src={expandMoreFillIcon}/>
                    </Box>
                </Box>
            </Popover.Target>
        </Popover>
    );
};