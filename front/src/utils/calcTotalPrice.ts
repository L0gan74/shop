import { FullItemCases } from "../types/item";

export const calcTotalPrice = (items:FullItemCases[]) => {
  // @ts-ignore
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
