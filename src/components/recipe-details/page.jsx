import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";

const RecipeDetailsItem = ({ getRecipeDetails }) => {
  return (
    <div className="min-h-screen p-4 flex flex-col mx-auto bg-gradient-to-br from-red-50 to-orange-100">
      <Link
        className="inline-flex items-center justify-center mx-auto bg-yellow-600
           text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700
            transition-colors shadow-lg hover:shadow-xl"
        href={"/recipe-list"}
      >
        Go To Recipe List
      </Link>
      <Card className="w-[80%] mt-4 shadow-md flex justify-center mx-auto">
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="w-full lg:sticky top-0 sm:flex gap-2">
              <img
                src={getRecipeDetails?.image}
                alt={getRecipeDetails.name}
                className="w-4/5 rounded object-cover"
              />
            </div>
            <div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  {getRecipeDetails.name}
                </h2>
              </div>
              <div className="flex justify-between gap-[130px]  ">
                <div className="w-full">
                  <div className=" gap-4 mt-5">
                    <p className="text-2xl font-semibold text-gray-700">
                      {getRecipeDetails.mealType[0]}
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="text-xl font-semibold text-gray-700">
                      {getRecipeDetails.cuisine}
                    </p>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-700">Ingredients</h3>
                    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                      {getRecipeDetails.ingredients.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-full mt-5">
                  <div className="mt-5 flex items-center gap-4">
                    <h1 className="font-semibold">PrepTimeMinutes : </h1>
                    <p className="text-xl text-gray-700">
                      {getRecipeDetails.prepTimeMinutes}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <h1 className="font-semibold">CookTimeMinutes : </h1>
                    <p className="text-xl text-gray-700">
                      {getRecipeDetails.cookTimeMinutes}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <h1 className="font-semibold">Servings : </h1>
                    <p className="text-xl text-gray-700">
                      {getRecipeDetails.servings}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <h1 className="font-semibold">Difficulty : </h1>
                    <p className="text-xl text-gray-700">
                      {getRecipeDetails.difficulty}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <h1 className="font-semibold">CaloriesPerServing : </h1>
                    <p className="text-xl text-gray-700">
                      {getRecipeDetails.caloriesPerServing}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <h1 className="font-semibold">ReviewCount : </h1>
                    <p className="text-xl text-gray-700">
                      {getRecipeDetails.reviewCount}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <h1 className="font-semibold">Rating : </h1>
                    <p className="text-xl text-gray-700">
                      {getRecipeDetails.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RecipeDetailsItem;
