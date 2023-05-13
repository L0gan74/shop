import React from "react";

import style from "./style.module.css";
import Wrapper from "./wrapper";
import { useGetItemQuery } from "../../../redux/services/product";
import { IItem } from "../../../types/item";

const Section = () => {
  const { data: items = [] } = useGetItemQuery("items");
  console.log(items);
  return (
    <div className={style.section}>
      <p className={style.title}>Чехлы</p>
      <div className={style.wrapper}>
        {items.map((item: IItem) => (
          <Wrapper key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
