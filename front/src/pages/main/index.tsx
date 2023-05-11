import React from "react";
import Banner from "../../components/main/banner";
import Section from "../../components/main/section/section";
import { IItem } from "../../types/item";
import { useCreateItemMutation } from "../../redux/services/product";

const Main: React.FC = () => {
  const [recipe, setRecipe] = React.useState({
    title: "",
    photo: "",
    price: "",
  });

  const [createItem] = useCreateItemMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createItem(recipe);
  };

  return (
    <>
      <Banner />
      <Section />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="название"
          value={recipe.title}
          onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="photo"
          value={recipe.photo}
          onChange={(e) => setRecipe({ ...recipe, photo: e.target.value })}
        />
        <input
          type="text"
          placeholder="price"
          value={recipe.price}
          onChange={(e) => setRecipe({ ...recipe, price: e.target.value })}
        />
        <button type="submit">отправить</button>
      </form>
    </>
  );
};

export default Main;
