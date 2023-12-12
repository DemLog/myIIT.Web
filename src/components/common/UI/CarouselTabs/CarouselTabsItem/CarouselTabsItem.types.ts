export interface CarouselTabsItemProps {
    label: string;
    icon?: string;
    value: string;
    active: boolean;
    onTabChange: (value: string) => void;
    width: number;
}