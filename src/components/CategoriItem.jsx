import { Link } from "react-router-dom";

export function CategoriItem(props) {
  const {
    strCategory,
    strCategoryThumb: images,
    strCategoryDescription: descr,
  } = props;

  return (
    <div className="card ">
      <div className="card-image">
        <img src={images} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{descr.slice(0, 70)}...</p>
      </div>
      <div className="card-action">
        <Link
          to={`/category/${strCategory}`}
          className="btn"
        >
          Whath category
        </Link>
      </div>
    </div>
  );
}
