import { getByCategory } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MealList } from "../components/MealList";
import { Preloader } from "../components/Preloader";

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getByCategory(name).then((data) =>
      setMeals(data.meals)
    );
  }, [name]);

  return (
    <>
      <button
        className="btn btn-mr"
        onClick={() => navigate(-1)}
      >
        назад
      </button>
      {!meals.length ? (
        <Preloader />
      ) : (
        <MealList meals={meals} />
      )}
    </>
  );
}
