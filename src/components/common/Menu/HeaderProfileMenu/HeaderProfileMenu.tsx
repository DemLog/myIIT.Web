import React, { Fragment } from "react";
import { HeaderProfileMenuProps } from "./HeaderProfileMenu.types";
import classes from "./HeaderProfileMenu.module.css";

import { Menu, Text } from "@components/UI";
import { Switch } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { getStyleColor } from "@styles/core/helpers/getStyleColor";

import accountIcon from "@assets/images/icons/w500/account_circle_fill.svg";
import darkModeIcon from "@assets/images/icons/w500/dark_mode_fill.svg";
import settingsIcon from "@assets/images/icons/w500/settings_fill.svg";
import helpIcon from "@assets/images/icons/w500/help_fill.svg";
import logoutIcon from "@assets/images/icons/w500/logout_fill.svg";
import { ReactSVG } from "react-svg";

export const HeaderProfileMenu: React.FC<HeaderProfileMenuProps> = (props: HeaderProfileMenuProps) => {
    const [openedDarkMode, { toggle: toggleDarkMode }] = useDisclosure(false);

    return (
        <Menu
            target={props.children}
            elements={[
                {
                    menuItems: [
                        {
                            children: <Text size="small" weight="light">Профиль</Text>,
                            leftSection: <ReactSVG className={classes.icon} src={accountIcon}/>,
                            color: getStyleColor("primary")
                        },
                        {
                            children: <Text size="small" weight="light">Темная тема</Text>,
                            leftSection: <ReactSVG className={classes.icon} src={darkModeIcon}/>,
                            rightSection: <Switch checked={openedDarkMode} color={getStyleColor("primary")} onChange={toggleDarkMode} size="xs"/>,
                            closeMenuOnClick: false,
                            onClick: toggleDarkMode,
                            color: getStyleColor("primary")
                        },
                        {
                            children: <Text size="small" weight="light">Настройки</Text>,
                            leftSection: <ReactSVG className={classes.icon} src={settingsIcon}/>,
                            color: getStyleColor("primary")
                        },
                        {
                            children: <Text size="small" weight="light">Помощь</Text>,
                            leftSection: <ReactSVG className={classes.icon} src={helpIcon}/>,
                            color: getStyleColor("primary")
                        },
                    ]
                },
                {
                    menuItems: [
                        {
                            children: <Text size="small" weight="medium" color="error-dark">Выход</Text>,
                            leftSection: <ReactSVG className={classes.icon} data-logout src={logoutIcon}/>,
                            color: getStyleColor("error")
                        }
                    ]
                }
            ]}
        />
    );
}