import { useState, FC } from "react";
import "./styles.css";

const ingredients = [
  "Сыр Моцарелла",
  "Буженина",
  "Томаты",
  "Пепперони",
  "Ананасы",
  "Сырный бортик",
];

const Pizza: FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<Boolean[]>(
    ingredients.map((item) => false)
  ); //будут все false в массиве ingredients
  const [limitWarning, setLimitWarning] = useState<Boolean>(false);

  const updateSelection = (index: number) => {
    const newSelectedIngredients = [...selectedIngredients]; //Копируем массив, чтоб потом изменять его
    const result = newSelectedIngredients.filter((position) => position); // создаем массив сколько true
    if (result.length >= 5) {
      setLimitWarning(true);

      if (newSelectedIngredients[index]) {
        newSelectedIngredients[index] = !newSelectedIngredients[index];
        setLimitWarning(false);
      }
    } else newSelectedIngredients[index] = !newSelectedIngredients[index]; //Меняем значение на противоположное по клику
    setSelectedIngredients(newSelectedIngredients); //Кладем в state измененный массив
  };

  return (
    <div className="Wrapper-ingredient">
      <div className="Wrapper-ingredient_list">
        {ingredients.map((ingredients, index) => {
          return (
            <div onClick={() => updateSelection(index)} className="ingredient">
              <div
                className={`checkbox ${
                  selectedIngredients[index] ? "selectedtrue" : ""
                }`}
              ></div>
              <span>{ingredients}</span>
            </div>
          );
        })}
        {limitWarning && (
          <span className="limitWarning">Можно выбрать до 5 элементов</span>
        )}
      </div>
    </div>
  );
};

export default Pizza;
