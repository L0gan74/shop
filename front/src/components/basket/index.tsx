import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cart";

import style from "./style.module.css";
import deleteImg from "../../assets/delete.svg";

// @ts-ignore
const BasketItem: React.FC = ({ id, title, price, photo, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickDelete = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className={style.item}>
      <button className={style.delete} onClick={onClickDelete} type="button">
        <img src={deleteImg} alt="delete" />
      </button>
      <div className={style.itemTop}>
        <img
          crossOrigin="anonymous"
          src={photo}
          width={250}
          height={250}
          alt={title}
        />
        <span className={style.txt}>
          <p className={style.title}>{title}</p>
          <p className={style.price}>{price} Р</p>
        </span>
      </div>
      <div className={style.buttons}>
        <button onClick={onClickPlus} type="button">
          +
        </button>
        <span>
          <p> {count}</p>
        </span>
        <button onClick={onClickMinus} type="button">
          -
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
