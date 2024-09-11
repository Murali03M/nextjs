"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { loginAction, logoutAction } from "@/actions";

export default function Header({getSession}:any) {


    async function handleOAuthSignin() {
        await loginAction()
    }
    
    async function handleOAuthSignOut()
    {
        await logoutAction();
    }
  return (
    <div className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative gap-15 text-black">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href={"/"} className="text-gray-900 text-lg font-semibold">
          Shopping cart
        </Link>
      </div>

      <ul className="flex  items-center justify-between gap-5  mr-10">
        <li className="text-lg font-semibold">
          <Link href={"/"}>Products</Link>{" "}
        </li>
        <li  className="text-lg font-semibold">
          {" "}
          <Link href={"/cart"}>Cart</Link>
        </li>
      </ul>

      <div className="flex space-x-3">
        <form action={getSession?.user ? handleOAuthSignOut:handleOAuthSignin}>
                  <Button type="submit">{getSession?.user ? "Logout":"Login"}</Button>
        </form>
      </div>
    </div>
  );
}
