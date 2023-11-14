import React from "react";
import {SearchPopoverListProps} from "./props";
import classes from "./SearchPopoverList.module.css";
import personAdd from "@assets/images/icons/w300/person_add.png";

import {Box, Text, ActionIcon, Image} from "@mantine/core";
import {SearchPopoverListItem} from "@components/Search/SearchPopover/SearchPopoverList/SearchPopoverListItem";

export const SearchPopoverList: React.FC<SearchPopoverListProps> = (props: SearchPopoverListProps) => {
    return (
        <Box className={classes.main_container} px="xs" py={2}>
            <Box className={classes.header}>
                <Text>{props.title}</Text>
            </Box>
            <Box className={classes.content} mt="xs">
                <SearchPopoverListItem avatar="" actionButton={
                    <ActionIcon variant="transparent">
                        <Image className={classes.button_icon} h={30} w="auto" fit="contain" src={personAdd}/>
                    </ActionIcon>
                }>
                    <Text>Логинов Дмитрий</Text>
                    <Text fw={100} size="12px">ПрИ-302</Text>
                </SearchPopoverListItem>

                <SearchPopoverListItem avatar="" actionButton={
                    <ActionIcon variant="transparent">
                        <Image className={classes.button_icon} h={30} w="auto" fit="contain" src={personAdd}/>
                    </ActionIcon>
                }>
                    <Text>Логинов Дмитрий</Text>
                    <Text fw={100} size="12px">ПрИ-302</Text>
                </SearchPopoverListItem>

                <SearchPopoverListItem avatar="" actionButton={
                    <ActionIcon variant="transparent">
                        <Image className={classes.button_icon} h={30} w="auto" fit="contain" src={personAdd}/>
                    </ActionIcon>
                }>
                    <Text>Логинов Дмитрий</Text>
                    <Text fw={100} size="12px">ПрИ-302</Text>
                </SearchPopoverListItem>
            </Box>
        </Box>
    );
};