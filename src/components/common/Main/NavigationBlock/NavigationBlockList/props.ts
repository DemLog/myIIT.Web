import React from "react";

export interface NavigationBlockListProps {
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>
}