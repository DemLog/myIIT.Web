import React, { Fragment } from "react";
import { MenuItemGroup, MenuProps } from "./Menu.types";
import classes from "./Menu.module.css";

import { Menu as MMenu } from "@mantine/core";

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {

    const renderMenuItems = (group: MenuItemGroup) => (
        <Fragment>
          {group.label && <MMenu.Label>{group.label}</MMenu.Label>}
          {group.menuItems.map((item) => (
            <MMenu.Item {...item}/>
          ))}
        </Fragment>
      );
    
      return (
        <MMenu classNames={{ dropdown: classes.main_container }} shadow="md" transitionProps={{ transition: "scale-y" }} offset={0}>
          <MMenu.Target>{props.target}</MMenu.Target>
    
          <MMenu.Dropdown>
            {props.elements?.map((item, index) => (
                <Fragment>
                {renderMenuItems(item)}
                {index !== props.elements.length - 1 && <MMenu.Divider />}
                </Fragment>
                ))}
          </MMenu.Dropdown>
        </MMenu>
      );
}