import { fetchAllProtects } from "@/actions";
import ProductCard from "../components/product-card";

export default async function Home() {
  const getAllProducts = await fetchAllProtects();

  console.log(getAllProducts);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="min-h-[100vh] grid sm:gird-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-10 max-w-6xl mx-auto p-2 ">
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
