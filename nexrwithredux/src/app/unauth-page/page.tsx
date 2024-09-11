import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";



export default async function Page() {


    const getSession = await auth();

    if (getSession?.user)
    {
        redirect("/")
    }


    return <div className="p-20">
        <h2 className="text-6xl "> You're not loged in , Please login </h2>
         
        </div>
     
}