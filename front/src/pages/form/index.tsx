import React from "react";

import { useCreateItemMutation } from "../../redux/services/product";
import style from "./style.module.css";

const FormPage = () => {
  const [recipe, setRecipe] = React.useState({
    title: "",
    photo: "",
    price: "",
    type: "",
    view: "",
    recommendation: "",
    material: "",
    peculiarities: "",
    clasp: "",
    manufacturer: "",
  });

  const [createItem] = useCreateItemMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createItem(recipe);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
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
      <input
        type="text"
        placeholder="type"
        value={recipe.type}
        onChange={(e) => setRecipe({ ...recipe, type: e.target.value })}
      />
      <input
        type="text"
        placeholder="view"
        value={recipe.view}
        onChange={(e) => setRecipe({ ...recipe, view: e.target.value })}
      />
      <input
        type="text"
        placeholder="recommendation"
        value={recipe.recommendation}
        onChange={(e) =>
          setRecipe({ ...recipe, recommendation: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="material"
        value={recipe.material}
        onChange={(e) => setRecipe({ ...recipe, material: e.target.value })}
      />
      <input
        type="text"
        placeholder="peculiarities"
        value={recipe.peculiarities}
        onChange={(e) =>
          setRecipe({ ...recipe, peculiarities: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="clasp"
        value={recipe.clasp}
        onChange={(e) => setRecipe({ ...recipe, clasp: e.target.value })}
      />
      <input
        type="text"
        placeholder="manufacturer"
        value={recipe.manufacturer}
        onChange={(e) => setRecipe({ ...recipe, manufacturer: e.target.value })}
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormPage;
