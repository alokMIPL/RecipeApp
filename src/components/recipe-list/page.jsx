import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

const RecipeList = ({ recipeList }) => {
  console.log("Recipe List Data in Recipe List Components = ", recipeList);
  return (
    <div className="p-4 mx-auto bg-gradient-to-br from-red-50 to-orange-100">
      <h1 className="text-4xl font-bold text-center text-gray-800">Recipes</h1>
      <Link
        className=" my-4 flex  justify-center mx-auto bg-yellow-600
           text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700
            transition-colors shadow-lg hover:shadow-xl"
        href={"/"}
      >
        Back to Home page
      </Link>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((recipe) => (
            <Link href={`recipe-list/${recipe.id}`}>
              <Card className="shadow-md" >
                <CardContent className="bg-white rounded-md ovrflow-hidden cursor-pointer hover:scale-[1.1] transition-all">
                  <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900">
                      {recipe.name}
                    </h2>
                  </div>
                  <div className="mt-4 flex items-center flex-wrap gap-2">
                    <p className="text-lg text-gray-600">{recipe.rating}</p>
                    <div className="ml-auto">
                      <p className="text-lg text-gray-600 font-bold">
                        {recipe.cuisine}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <h1>Data Not Found </h1>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
