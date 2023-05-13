import React from "react";

import style from "./style.module.css";
import favorites from "../../../../assets/favorites.svg";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addFavorites, addItem } from "../../../../redux/slices/cart";
import { IItem } from "../../../../types/item";
import { useDeleteItemMutation } from "../../../../redux/services/product";

const Wrapper = ({ id, title, photo, price }: IItem) => {
  const dispatch = useDispatch();
  const [deleteItem] = useDeleteItemMutation();

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      photo,
    };
    dispatch(addItem(item));
  };

  const onClickFavorites = () => {
    const favorites = {
      id,
      title,
      price,
      photo,
    };
    dispatch(addFavorites(favorites));
  };

  const onClickDelete = async (id: IItem) => {
    await deleteItem(id).unwrap();
  };

  return (
    <div key={id} className={style.item}>
      <button onClick={onClickAdd} className={style.favorites} type="button">
        <img src={favorites} alt="favorites" />
      </button>
      <img src={photo} alt={title} />
      <span>
        <p className={style.name}>{title}</p>
        <p className={style.price}>{price} Р</p>
      </span>
      <Link className={style.link} to={`/product/${id}`}>
        Полная информация
      </Link>
      {/* @ts-ignore */}
      <button onClick={() => onClickDelete(id)} type="button">
        Удалить товар
      </button>
      <button onClick={onClickFavorites} type="button">добавить в избранное</button>
    </div>
  );
};

export default Wrapper;
