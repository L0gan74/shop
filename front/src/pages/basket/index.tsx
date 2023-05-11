import React from "react";
import { useDispatch } from "react-redux";


const Basket = () => {

  return (
    <div>
      {/* <img
        crossOrigin="anonymous"
        src={photo}
        width={250}
        height={250}
        alt={title}
      />
      <span>
        <p>Название:</p>
        <p>{title}</p>
      </span>
      <span>
        <p>Цена:</p>
        <p> {price}</p>
      </span>
      <span>
        <p>Количество:</p>
        <p> {count}</p>
      </span> */}
      <button type="button">
        +
      </button>
      <button type="button">
        -
      </button>
      <button type="button">
        Удалить
      </button>
    </div>
  );
};

export default Basket;
