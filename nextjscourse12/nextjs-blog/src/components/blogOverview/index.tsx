'use client'
import { useEffect, useState } from "react";
import AddBlog from "../addBlog";
import ShowBlog from "../showBlog";
import { useRouter } from 'next/navigation'




export function BlogOverview() {

  const router = useRouter();

   
    async function datahandler() {
        try {
          console.log(blogData);
    
          setLoading(true);
          const apiResponse = await fetch("/api/add-blog", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData),
          });
          console.log(apiResponse);
          
          const result = await apiResponse.json();
          router.refresh();

          if (result?.success)
          {
            setBlogData({
              title: "",
              description: ""
            });
            setLoading(false);
            setOpenModal(false);
            router.refresh();

              
          }
         
         console.log(result);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
  
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
    const [blogData, setBlogData] = useState({
        title: "",
        description:""

    })

    useEffect(() => {
      router.refresh();
    });
   
  return (
    <div className="min-h-screen   bg-gradient-to-r from-purple-500 to-blue-700 p-6 ">
      <AddBlog loading={loading} setLoading={setLoading} blogData={blogData} setBlogData={setBlogData} datahandler={datahandler} openModal={openModal} setOpenModal={setOpenModal} />
      <div className="mt-4 ">

        <h1 className="text-4xl ">See all the blogs</h1>
        <ShowBlog />
      </div>
     
    </div>
  );
}
