import RecipeDetail from "@/components/recipe-detail";


async function fetchDetails(params: { details: number }) {
    const responseData = await fetch(`https://dummyjson.com/recipes/${params.details}`);
    const response = await responseData.json();
   

    return response;
}

export default async function RecipeDetails({ params }: { params: { details: number } }) {
    const details = await fetchDetails(params);

    return (
        <RecipeDetail details={details} />
    );
}
