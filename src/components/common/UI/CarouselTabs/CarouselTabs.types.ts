import { CarouselTabsItemProps } from "./CarouselTabsItem";

export type CarouselTabType = Omit<
  CarouselTabsItemProps,
  "index" | "active" | "onTabChange" | "width"
>;

export interface CarouselTabsProps {
  tabs: CarouselTabType[];
  activeTab: string;
  onTabChange: (value: string) => void;
  fullWidth?: boolean;
}
