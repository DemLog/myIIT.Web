import { CategoryList } from "../Messages.constants";

export interface CategoryProps {
  activeTab: CategoryList;
  handleChangeCategory: (value: CategoryList) => void;
}
