import { CarouselTabType } from "@components/UI/CarouselTabs";
import { CategoryList } from "../Messages.constants";

export const CategoryTitles: Record<CategoryList, string> = {
  [CategoryList.Dialogs]: "Список диалогов",
  [CategoryList.Chats]: "Список чатов",
  [CategoryList.Feedbacks]: "Список тикетов",
};

export const CategoryLabels: Record<CategoryList, string> = {
  [CategoryList.Dialogs]: "Диалоги",
  [CategoryList.Chats]: "Чаты",
  [CategoryList.Feedbacks]: "Обратная связь",
};

export const CategoryTabs: CarouselTabType[] = [
  {
    value: CategoryList.Dialogs,
    label: CategoryLabels[CategoryList.Dialogs],
  },
  {
    value: CategoryList.Chats,
    label: CategoryLabels[CategoryList.Chats],
  },
  {
    value: CategoryList.Feedbacks,
    label: CategoryLabels[CategoryList.Feedbacks],
  },
];
