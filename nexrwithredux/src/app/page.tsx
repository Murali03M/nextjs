import { fetchAllProtects } from "@/actions";
import ProductCard from "../components/product-card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function Home() {
  const getAllProducts = await fetchAllProtects();

  const getSession = await auth();


  if (!getSession?.user)
  {   redirect("/unauth-page")

  }

  console.log(getAllProducts);

  return (
    <div>
      <div className=" mt-4 min-h-[100vh] grid sm:gird-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-10 max-w-6xl mx-auto p-2 ">
        {
          // eslint-disable-next-line react/jsx-key
          getAllProducts &&
          getAllProducts.data &&
          getAllProducts.data.length > 0 ? (
            getAllProducts.data.map((productItem: never, index: number) => (
              <ProductCard item={productItem} key={index} />
            ))
          ) : (
            <div>Empty</div>
          )
        }
      </div>
    </div>
  );
}
