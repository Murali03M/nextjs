import Link from "next/link";
import { Recipe } from "../recipe-list";

export default function RecipeDetail({ details }: { details: Recipe }) {
    console.log(details);
    
    return (
        <div>
            <Link href={'/recipe-list'}>Go back to recipe list</Link>
            <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto"></div>
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full lg:stick top-0  sm:flex gap-2">
                    <img className="w-4/5 rounded object-cover"
                        src={details?.image}
                        alt={details?.name}
                     />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-700">
                        {details?.name}
                    </h2>
                    <div className="gap-4 mt-5">
                    <p className="text-2xl text-gray-700">
                        {details?.mealType}
                    </p>
                    </div>
                    <div className="gap-4 mt-5">
                    <p className="text-2xl text-gray-700">
                            {details?.cuisine}
                    </p>
                    </div>
                    <div className="gap-4 mt-5">
                    <p className="text-2xl text-gray-700  inline">
                            {details?.ingredients.map((item,index) =>  <li key={index}>{item}</li>)}
                    </p>
                     <p className="text-2xl text-gray-700">
                        Instructions {details?.instructions}
                    </p>
                </div>
                </div>
             
            </div>
    

        </div>
    );
}
