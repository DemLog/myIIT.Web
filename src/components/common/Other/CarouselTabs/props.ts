import {CarouselTabsItemProps} from "@components/Other/CarouselTabs/CarouselTabsItem/props";

export type CarouselTabType = Omit<CarouselTabsItemProps, "index" | "active" | "onTabChange" | "width">

export interface CarouselTabsProps {
    tabs:CarouselTabType[];
    activeTab: string;
    onTabChange: (value: string) => void;
}