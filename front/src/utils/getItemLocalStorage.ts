import { calcTotalPrice } from "./calcTotalPrice";

export const getItemLocalStorage = () => {
  const data = localStorage.getItem("item");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
