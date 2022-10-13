import { CategoriItem } from "../components/CategoriItem";

export function CategoriList(props) {
  const { catalog = [] } = props;

  return (
    <div className="list">
      {catalog.length ? (
        catalog.map((item) => (
          <CategoriItem key={item.idCategory} {...item} />
        ))
      ) : (
        <h3>Categories Not Found</h3>
      )}
    </div>
  );
}
