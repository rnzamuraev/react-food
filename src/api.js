import { API_URL } from "./config";

const getByCategory = async (name) => {
  const response = await fetch(
    API_URL + "filter.php?c=" + name
  );
  return await response.json();
};

const getMealById = async (mealId) => {
  const response = await fetch(
    API_URL + "lookup.php?i=" + mealId
  );
  return await response.json();
};

const geMealByName = async (name) => {
  const response = await fetch(
    API_URL + "search.php?s=" + name
  );
  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(
    API_URL + "categories.php"
    // "www.themealdb.com/api/json/v1/1/categories.php"
  );
  return await response.json();
};

export {
  getByCategory,
  getMealById,
  geMealByName,
  getAllCategories,
};
