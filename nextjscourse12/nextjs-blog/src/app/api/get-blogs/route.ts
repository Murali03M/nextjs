import connectTODB from "@/database";
import Blog from "@/modal/blog";
import { NextResponse } from "next/server";



export async function GET()  {
    
    try {
        await connectTODB();

        const response = await Blog.find({});
    
    
        if (response)
        {
            return NextResponse.json({
                success: true,
                data:response
            })
        } else {
            return NextResponse.json({
                success: false,
                message:"SOmething went wrong"
            })

        }
    
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message:"SOmething went wrong"
        })
       
    }
    


    
}