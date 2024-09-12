"use server"





export async function fetchAllProtects() {


    try {

        const fetchData = await fetch('https://dummyjson.com/products', {
            method: 'GET',
            cache:"no-cache",
        });
        const response = await fetchData.json();
        return {
            success: true,
            data: response?.products,
            message:"Success"
        };
        
    } catch (error) {
        console.log(error);
        return ({
            success: false,
            data: undefined,
            message: "error in the fetching"
        })
        
    }
}


export async function fetchProductDetails(prodId:number) {


    try {

        const fetchData = await fetch(`https://dummyjson.com/products/${prodId}`, {
            method: 'GET',
            cache:"no-cache",
        });
        const response = await fetchData.json();
        return {
            success: true,
            data: response,
            message:"success"
        };
        
    } catch (error) {
        console.log(error);
        return ({
            success: false,
            data:undefined,
            message: "error in the fetching"
        })
        
    }

}


