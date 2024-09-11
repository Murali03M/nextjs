import Loading from "@/app/loading";
import { auth } from "@/auth";
import ReduxProvider from "@/provider";
import { redirect } from "next/navigation";
import { Suspense } from "react";



export default async function CommonLayout({ children }: any) {
    

  const getSession = await auth();
 

    return <ReduxProvider getSession={getSession}>
        <Suspense fallback={<Loading/>}>
        {children}
        </Suspense></ReduxProvider>
}