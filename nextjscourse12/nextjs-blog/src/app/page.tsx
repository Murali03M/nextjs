
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-700 p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className=" text-4xl text-white font-bold mb-4"> Browse our blog collection</h2>
        <Link href={'/blogs'} className="bg-white text-blue-700 py-2 px-2 rounded font-semibold ">Explore our blogs </Link>
        
     </div>
    </div>
  );
}
