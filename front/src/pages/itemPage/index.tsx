import React from "react";
import { useParams } from "react-router";
import axios from "axios";

import style from "./style.module.css";
import { FullItemCases } from "../../types/item";
import favorites from "../../assets/favorites.svg";

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setproduct] = React.useState<FullItemCases | null>(null);

  React.useEffect(() => {
    axios
      .get<FullItemCases>(`http://localhost:3001/cases/${id}`)
      .then((response) => {
        setproduct(response.data);
      });
  }, [id]);



  return (
    <div className={style.item}>
      <div className={style.left}>
        <button className={style.favorites} type="button">
          <img className={style.favorites} src={favorites} alt="favorites" />
        </button>
        <img className={style.img} src={product?.photo} alt={product?.title} />
        <div className={style.bottom}>
          <p className={style.name}>{product?.title}</p>
          <p className={style.price}>{product?.price} Р</p>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.rightTop}>
          <h2>{product?.title}</h2>
          <p>{product?.price} Р</p>
        </div>
        <div className={style.btn}>
          <button type="button">добавить в корзину</button>
        </div>
        <div className={style.description}>
          <div className={style.descriptionTop}>
            <h3>Описание и характеристики</h3>
          </div>
          <div className={style.descriptionBottom}>
            <p>Тип: {product?.type}</p>
            <p>Вид чехла: {product?.view}</p>
            <p>Рекомендовано для: {product?.recommendation}</p>
            <p>Материал: {product?.material}</p>
            <p>Особенности: {product?.peculiarities}</p>
            <p>Застёжка: {product?.clasp}</p>
            <p>Страна-производитель: {product?.manufacturer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
