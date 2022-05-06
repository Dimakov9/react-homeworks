import "./Box.css";
import { useState } from "react";

function PizzaConstructor() {
  const [ingredientsArr, setIngredientsArr] = useState([
    { id: 1, ingredients: "Сыр Моцарелла", status: false },
    { id: 2, ingredients: "Буженина", status: false },
    { id: 3, ingredients: "Томаты", status: false },
    { id: 4, ingredients: "Пепперони", status: false },
    { id: 5, ingredients: "Ананасы", status: false },
    { id: 6, ingredients: "Сырный бортик", status: false },
  ]);

  // const ClickIngredients = (item) => {
  //   setIngredientsArr((item.status = true));
  //   console.log(ingredientsArr[1].status);
  // };

  let res = ingredientsArr.map(function (item) {
    return (
      <label key={item.id}>
        <button
          onClick={() => {
            // ClickIngredients(item);
            setIngredientsArr((item.status = true));
            console.log(item.status);
          }}
        >
          123{" "}
        </button>
        <span>{item.ingredients}</span>
      </label>
    );
  });

  return <div>{res}</div>;
}

export default PizzaConstructor;
