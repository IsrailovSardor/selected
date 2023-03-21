import { Item } from "../types/Item";

export const isChecked = (checkedItems: Item[], item: Item) => {
  return checkedItems.some((checkedItem) => checkedItem.id === item.id);
};

export const removeItemFromArray = (array: Item[], item: Item) => {
  return array.filter((checkedItem) => checkedItem.id !== item.id);
};