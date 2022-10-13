import { useState, useEffect } from "react";
import { Preloader } from "../components/Preloader";
import { getAllCategories } from "../api";
import { CategoriList } from "../components/CategoriList";

export function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then(
      (data) =>
        data.categories && setCatalog(data.categories)
    );
  }, [setCatalog]);

  return (
    <>
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoriList catalog={catalog} />
      )}
    </>
  );
}
