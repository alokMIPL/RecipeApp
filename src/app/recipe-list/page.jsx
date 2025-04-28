import RecipeList from "@/components/recipe-list/page";
import React from "react";

const Recipes = async () => {
  async function fetchListRecipes() {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/recipes`);
      const data = await apiResponse.json();
      return data?.recipes;
    } catch (error) {
      throw new Error(error);
    }
  }

  const recipeList = await fetchListRecipes();
  console.log("RecipeList Data = ", recipeList);

  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
};

export default Recipes;
