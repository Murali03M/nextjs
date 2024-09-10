import { NextRequest, NextResponse } from "next/server";
import connectTODB from "@/database";
import Blog from "@/modal/blog";
import Joi from "joi";

// Define the structure of the incoming blog data
interface BlogData {
  title: string;
  description: string;
}

// Joi schema for validating incoming blog data
const AddnewBlogSchema = Joi.object<BlogData>({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req: NextRequest): Promise<NextResponse> {

    console.log("weoidvbkxb");
    
  try {
    // Connect to the database
      await connectTODB();
      
      console.log("database conected");
      

    // Parse the request body as BlogData
      const extractBlogData: BlogData = await req.json();
      
      console.log(extractBlogData);
      

    const { title, description } = extractBlogData;

    // Validate the request body against the Joi schema
    const { error } = AddnewBlogSchema.validate({ title, description });
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message, // Send validation error message
        },
        { status: 400 } // Set HTTP status to 400 for bad request
      );
    }

    // Create a new blog entry in the database
    const newlyCreatedBlog = await Blog.create(extractBlogData);

    // Return success response if blog was created
    if (newlyCreatedBlog) {
      return NextResponse.json(
        {
          success: true,
          message: "Blog added successfully",
        },
        { status: 201 } // Set HTTP status to 201 for resource creation
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to add the blog",
        },
        { status: 500 } // Set HTTP status to 500 for server error
      );
    }
  } catch (error) {
    console.error("Error adding blog:", error); // Log the error for debugging
    return NextResponse.json(
      {
        success: false,
        message: "Server error occurred",
      },
      { status: 500 } // Set HTTP status to 500 for server error
    );
  }
}
