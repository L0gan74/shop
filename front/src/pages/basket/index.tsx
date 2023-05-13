import React from "react";
import { useDispatch } from "react-redux";
import { clearItems } from "../../redux/slices/cart";
import BasketItem from "../../components/basket";

import basket from "../../assets/basket.png";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IItem } from "../../types/item";

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useTypedSelector((state) => state.cart);
  const data = items[0];
  console.log("корзина айтемс", items);

  const clear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return (
      <div className={style.main}>
        <img src={basket} alt="basket" />
        <h2>Корзина пуста</h2>
        <p>Но это никогда не поздно исправить :)</p>
        <Link to="/">
          <button typeof="button">В каталог товаров</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {items.map((item: IItem) => (
        <BasketItem key={item.id} {...item} />
      ))}

      <span className={style.total}>
        <p>Общая сумма: {totalPrice} Р</p>
        <button onClick={clear} type="button">
          Очистить корзину
        </button>
      </span>
    </div>
  );
};

export default Basket;
