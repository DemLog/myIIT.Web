import {ReactNode} from "react";

export interface CarouselTabsBlockProps {
    children?: Array<ReactNode>;
    activeTab: string;
}