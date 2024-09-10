import RecipeList from "@/components/recipe-list";



async function fetchRecipeList() {

    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const response = await apiResponse.json()
         return response.recipes
      
        
    } catch (e: any) {
         throw new Error(e);
    }
}

export default async function Recipes() {

    const recipesList =await fetchRecipeList();
    
    return <RecipeList recipesList={recipesList} />
}   