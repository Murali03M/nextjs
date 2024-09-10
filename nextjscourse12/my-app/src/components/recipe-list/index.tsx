/* eslint-disable @next/next/no-img-element */
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Link from "next/link";
  
  export type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string;
  };
  
  type RecipeListProps = {
    recipesList: Recipe[];
  };
  
  export default function RecipeList({ recipesList }: RecipeListProps) {
    return (
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Recipe List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipesList && recipesList.length > 0 ? (
            recipesList.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                <Card className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                  <CardContent>
                    <div className="w-full aspect-w-16 aspect-h-18 lg:h-80">
                      <img
                 src={recipe?.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover object-top"
                      />
                     </div>
                    <div className="p-6 ">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recipe.name}
                       </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-900">Rating: {recipe.rating}</p>
                        <p className="text-lg text-gray-900 ml-auto font-bold">{recipe.cuisine}</p>
                      </div>        
                                
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    );
  }
  