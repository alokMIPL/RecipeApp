import Link from "next/link";

export default function Home() {
  return (
   <>
   <div
    className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100
     flex flex-col items-center justify-center p-6"
  >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to the Recipe App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Dish cooking is an art, and we are here to help you master it!
        </p>
        <Link
          href={'/recipe-list'}
          className="inline-flex items-center justify-center bg-yellow-600
           text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700
            transition-colors shadow-lg hover:shadow-xl"
        >
          Explore Recipes
        </Link>
      </div>
    </div>
   </>
  );
}
