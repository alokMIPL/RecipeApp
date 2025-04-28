import RecipeDetailsItem from "@/components/recipe-details/page";
import React from "react";

const RecipeDetails = async ({params}) => {
  async function fetchRecipeDetails(currentrecipeId) {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentrecipeId}`);
      const data = await apiResponse.json();
      console.log("recipe details from fetch = ",data)
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  console.log('recipe details after fetch = ',getRecipeDetails);

  

  return <div>
    <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
  </div>;
};

export default RecipeDetails;
