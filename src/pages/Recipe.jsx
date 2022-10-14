import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealByName } from "../api";
// import { getMealById } from "../api";

export function Recipe() {
  const { name } = useParams();
  const navigate = useNavigate();
  // const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getMealByName(name).then((data) =>
      setRecipe(data.meals[0])
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
      <div className="recipe-card ">
        <div className="recipe-image">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        </div>
        <div className="recipe-content">
          <h5 className="recipe-subtitle">
            {recipe.strCategory}
          </h5>
          <h4 className="recipe-title">{recipe.strMeal}</h4>
          {recipe.strArea && <h6>{recipe.strArea}</h6>}
        </div>
        <div className="recipe-descr">
          <p>{recipe.strInstructions}</p>
          <h5>Ingredients</h5>

          {Object.keys(recipe).map((key) => {
            if (key.includes("Ingredient") && recipe[key]) {
              return (
                <div
                  key={key}
                  className="recipe-ingredients"
                >
                  <span>{recipe[key]}:</span>
                  <span>
                    {recipe[`strMeasure${key.slice(13)}`]}
                  </span>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="recipe-video">
          {recipe.strYoutube && (
            <iframe
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                -11
              )}`}
              title={recipe.strMeal}
              // frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* <div className="recipe-action">
          <Link
          to={`/meal/${recipe.strMeal}`}
          className="btn"
          >
            Whath recipe
          </Link>
        </div> */}
      </div>
    </>
  );
}
