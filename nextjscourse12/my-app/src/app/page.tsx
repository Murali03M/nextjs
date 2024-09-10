import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center mt-24 flex-col">
      <h1>Welcome to recipe website</h1>
      <Link href={".recipe-list"}>Click the button to see the recipe list</Link>
    </div>
  );
}
