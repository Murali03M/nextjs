

import { fetchProductDetails } from '@/actions'

import AddtoCard from '@/components/addto-card';
import React from 'react'

const Page = async ({ params }: { params: { details: number } }) => {
    
    const getProductDetails = await fetchProductDetails(params.details);
  
    
    return (
      
      <div className='max-w-6xl mx-auto p-2'>
          <div className='p-6'>
              <div className='grid items-start grid-cols-1 lg:grid-cols-5 gap-12'>
                  <div className='lg:col-span-3 bg-gray-100 w-full top-0 text-center'>
                      <img src={getProductDetails?.data.thumbnail}
                          className='w-4/5 rounded object-cover' />
                      <hr className='border-black border-2 mx-6'></hr>
                      <div className='flex flex-wrap gap-5 justify-center mx-auto'>
                          {getProductDetails?.data.images.map((image: string) => (
                              <img src={image} key={image} className="w-24 cursor-pointer" />
                          ))}
                      </div>
                  </div>
                  <div className='lg:col-span-2 '>
                      <h2 className='text-3xl font-bold '>{getProductDetails?.data.title}</h2>
                      <p className='mt-5  text-xl'>{getProductDetails?.data.price}</p>
                      <p className='mt-5  text-xl'>{getProductDetails?.data.description}</p>
                        <AddtoCard productDetails={getProductDetails} />
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Page