import { MealItem } from "./MealItem";

export function MealList(props) {
  const { meals = [] } = props;

  return (
    <div className="list">
      {meals.length ? (
        meals.map((meal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))
      ) : (
        <h3>Categories Not Found</h3>
      )}
    </div>
  );
}
