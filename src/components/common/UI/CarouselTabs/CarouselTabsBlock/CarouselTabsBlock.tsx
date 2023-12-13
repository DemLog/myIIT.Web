import React, {ReactNode} from "react";
import {CarouselTabsBlockProps} from "./CarouselTabsBlock.types";
import classes from "./CarouselTabsBlock.module.css";

export const CarouselTabsBlock: React.FC<CarouselTabsBlockProps> = (props: CarouselTabsBlockProps): React.ReactElement | null => {
    const extractValues = (child: ReactNode): string | null => {
        if (React.isValidElement(child) && typeof child.props.value === "string") {
            return child.props.value;
        }
        return null;
    };

    const currentTabPanel: ReactNode | null = props.children.find(
        (value) => props.activeTab === extractValues(value)
    );

    return currentTabPanel ? (currentTabPanel as React.ReactElement) : null;
};