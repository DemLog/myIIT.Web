import React from "react";
import { NavigationMobileProps } from "./NavigationMobile.types";
import classes from "./NavigationMobile.module.css";

import { Avatar, Box, UnstyledButton } from "@mantine/core";
import { Text } from "@components/UI";
import { ReactSVG } from "react-svg";
import expandIcon from "@assets/images/icons/w200/expand_more_fill.svg";

import { observer } from "mobx-react";
import { useStores } from "@core/hooks";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export const NavigationMobileComponent: React.FC<NavigationMobileProps> = (props: NavigationMobileProps) => {
    const matchesMobile = useMediaQuery('(max-width: 579px)');

    const { navigationStore, userStore } = useStores();
    const navigation = useNavigate();

    const serviceList = [
        ...navigationStore.services.slice(1, 3),
        navigationStore.services[0],
        ...navigationStore.services.slice(3, 5),
    ];

    const handleButtonClick = (index: number, url: string) => {
        navigationStore.handleClickLink(index, () => navigation(url));
    };

    // Функция для преобразования индекса
    const transformIndex = (index: number) => {
        const indexMap = [1, 2, 0, 3, 4];
        return indexMap[index];
    };

    // Функция для определения активной кнопки
    const isActiveButton = (currentIndex: number) => {
        const { active } = navigationStore;
        const activeMap = [1, 2, 0, 3, 4];

        return activeMap[currentIndex] === active;
    };

    return (
        <Box className={classes.main_container} px="sm" py="xs">
            <Box className={classes.buttons_group}>
                {serviceList.map((button, index) => (
                    <UnstyledButton
                        key={index}
                        className={classes.button_menu}
                        onClick={() => handleButtonClick(transformIndex(index), `/${button.url}`)}
                        data-active={isActiveButton(index)}
                        data-centered={index === 2}
                        p={3}
                    >
                        <Box className={classes.button_content}>
                            <ReactSVG className={classes.icon} src={button.icon as string} />
                            {index !== 2 && (
                                <Text size="10px" weight="medium" lts={-1}>
                                    {button.label}
                                </Text>
                            )}
                        </Box>
                    </UnstyledButton>
                ))}
            </Box>
            {!matchesMobile &&
                <Box className={classes.profile_block} onClick={() => navigation("/profile")}>
                    <Box className={classes.avatar_box}>
                        <Avatar size="38px" src={userStore.getUser()?.avatar} />
                    </Box>
                    <Box className={classes.name_box} ml={6}>
                        <Text size="medium" weight="regular" lts={-1}>{userStore.getUser()?.lastName} {userStore.getUser()?.firstName}</Text>
                        <Text size="10px" weight="light" lts={-1} color="text-secondary">{userStore.getUser()?.studyGroup}</Text>
                    </Box>
                    <Box className={classes.expand_box} ml={6}>
                        <ReactSVG className={classes.icon_profile} src={expandIcon} />
                    </Box>
                </Box>}
        </Box>
    );
};

export const NavigationMobile = observer(NavigationMobileComponent);
