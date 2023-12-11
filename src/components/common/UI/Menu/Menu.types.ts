import { MenuItemProps } from "@mantine/core";
import { PolymorphicComponentProps } from "@mantine/core/lib/core/factory/create-polymorphic-component";
import { ReactNode } from "react";

export interface MenuItemGroup {
    label?: string;
    menuItems: PolymorphicComponentProps<"button", MenuItemProps>[];
}

export interface MenuProps {
    target?: ReactNode;
    elements?: MenuItemGroup[];
}