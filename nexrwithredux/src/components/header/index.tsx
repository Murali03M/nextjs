"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  return (
    <div className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative gap-15 text-black">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href={"/"} className="text-gray-900 text-lg font-semibold">
          Shopping Cart
        </Link>
      </div>

      <ul className="flex items-center justify-between gap-5 mr-10">
        <li className="text-lg font-semibold">
          <Link href={"/"}>Products</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href={"/cart"}>Cart</Link>
        </li>
      </ul>

      <div className="flex space-x-3">
        {loading ? (
          <div>Loading...</div>
        ) : session ? (
          <>
            <span>Welcome, {session.user?.name}</span>
            <Button onClick={() => signOut()}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => signIn()}>Login</Button>
        )}
      </div>
    </div>
  );
}
