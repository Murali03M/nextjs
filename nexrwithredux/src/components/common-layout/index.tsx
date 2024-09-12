"use client"

import React, { Suspense } from 'react';
import Loading from "@/app/loading";

import ReduxProvider from "@/provider";
import { User } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

// Define the Session type
export interface Session {
    user: User ;
}

// Define types for props
interface CommonLayoutProps {
    children: React.ReactNode;
}

export default  function CommonLayout({ children }: CommonLayoutProps) {
   

    return (
        <SessionProvider > 
        <ReduxProvider >
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
            </ReduxProvider>
            </SessionProvider >
    );
}
