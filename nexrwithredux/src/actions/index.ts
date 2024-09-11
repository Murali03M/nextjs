"use server"

import { signIn, signOut } from "@/auth";





export async function fetchAllProtects() {


    try {

        const fetchData = await fetch('https://dummyjson.com/products', {
            method: 'GET',
            cache:"no-cache",
        });
        const response = await fetchData.json();
        return {
            success: true,
            data:response?.products
        };
        
    } catch (error) {
        console.log(error);
        return ({
            success: false,
            message: "error in the fetching"
        })
        
    }
}


export async function fetchProductDetails(prodId:any) {


    try {

        const fetchData = await fetch(`https://dummyjson.com/products/${prodId}`, {
            method: 'GET',
            cache:"no-cache",
        });
        const response = await fetchData.json();
        return {
            success: true,
            data:response
        };
        
    } catch (error) {
        console.log(error);
        return ({
            success: false,
            message: "error in the fetching"
        })
        
    }

}



export async function loginAction() {
   await signIn('github');
}


export async function logoutAction() {
    await signOut();
}

