import React from "react";

import style from "./style.module.css";
import favorites from "../../../../assets/favorites.svg";
// import favoritesActive from "../../../../assets/favoritesActive.svg";

import { useGetItemQuery } from "../../../../redux/services/product";
import { Link } from "react-router-dom";

const Wrapper: React.FC = () => {

  const { data: items = [] } = useGetItemQuery("items");
  console.log(items);
  return (
    <div className={style.wrapper}>
      {items &&
        items.map((item) => (
          <div key={item.id} className={style.item}>
            <button className={style.favorites} type="button">
              <img src={favorites} alt="favorites" />
            </button>
            <img src={item.photo} alt={item.title} />
            <span>
              <p className={style.name}>{item.title}</p>
              <p className={style.price}>{item.price} Р</p>
            </span>
            <Link className={style.link} to={`/product/${item.id}`}>Полная информация</Link>
          </div>
        ))}
    </div>
  );
};

export default Wrapper;
