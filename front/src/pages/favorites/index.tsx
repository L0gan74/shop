import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IItem } from "../../types/item";

const Favorites: React.FC = () => {
  const { items } = useTypedSelector((state) => state.cart);

  return (
    <div>
      <h2>Favorites</h2>
      {items.map((item: IItem) => (
        <div>
          <p>{item.title}</p>
          <button type="button">удалить из избранного</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
