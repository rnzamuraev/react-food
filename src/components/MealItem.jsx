import { Link } from "react-router-dom";

export function MealItem(props) {
  const { strMeal, strMealThumb: images } = props;

  return (
    <div className="card ">
      <div className="card-image">
        <img src={images} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${strMeal}`} className="btn">
          Whath recipe
        </Link>
      </div>
    </div>
  );
}
