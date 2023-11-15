import React, {useState} from "react";
import {ProfilePopoverProps} from "./props";
import classes from "./ProfilePopover.module.css";

import {Box, Divider, Image, NavLink, Switch, Text} from "@mantine/core";

import accountIcon from "@assets/images/icons/w300/account_circle.png";
import darkModeIcon from "@assets/images/icons/w300/dark_mode.png";
import settingsIcon from "@assets/images/icons/w300/settings.png";
import helpIcon from "@assets/images/icons/w300/help.png";
import logoutIcon from "@assets/images/icons/w300/logout.png";

import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react";
import {useStores} from "@core/hooks";

const ProfilePopoverComponent: React.FC<ProfilePopoverProps> = (props: ProfilePopoverProps) => {
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();
    const {navigationStore} = useStores();

    return (
        <Box className={classes.main_container}>
            <NavLink label={<Text fw={300}>Профиль</Text>}
                     leftSection={<Image h="xl" w="auto" fit="contain" src={accountIcon}/>} py={6}
                     onClick={() => navigationStore.handleClickLink(8, () => navigate("/profile"))}/>
            <NavLink label={<Text fw={300}>Темная тема</Text>}
                     leftSection={<Image h="xl" w="auto" fit="contain" src={darkModeIcon}/>}
                     rightSection={<Switch color="#5B6CF0" checked={checked}
                                           onChange={(event) => setChecked(event.currentTarget.checked)}/>} py={6}
                     onClick={() => setChecked(prevState => !prevState)}/>
            <NavLink label={<Text fw={300}>Настройки</Text>}
                     leftSection={<Image h="xl" w="auto" fit="contain" src={settingsIcon}/>} py={6}
                     onClick={() => navigationStore.handleClickLink(8, () => navigate("/profile"))}/>
            <NavLink label={<Text fw={300}>Помощь</Text>}
                     leftSection={<Image h="xl" w="auto" fit="contain" src={helpIcon}/>} py={6}
                     onClick={() => navigationStore.handleClickLink(8, () => navigate("/profile"))}/>

            <Divider my={5} w="90%"/>

            <NavLink label={<Text fw={500} c="#990000">Выйти</Text>}
                     leftSection={<Image className={classes.icon_logout} h="xl" w="auto" fit="contain"
                                         src={logoutIcon}/>} py={6}/>
        </Box>
    );
};

export const ProfilePopover = observer(ProfilePopoverComponent);