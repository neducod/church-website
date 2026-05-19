import { useState } from 'react'

import ThumbOne from '../assets/download (1).jpeg'
import ThumbTwo from '../assets/download (2).jpeg'
import ThumbThree from '../assets/download.jpeg'

const data = [
    {
        id: 1,
        title: "Sunday Prayer and Confession Sunday Service with Pastor Br...",
        name: "Pastor John",
        image: ThumbOne,
        description: "Praise Hill",
        views: "213k",
        stream: "7 hours ago"
    },
    {
        id: 1,
        title: "Wednesday's Word and Bible Prayer Meeting with the Yo...",
        name: "PAstor Bro",
        image: ThumbTwo,
        description: "Praise Hill",
        views: "302k",
        stream: "Streamed 7 hours ago"
    }, 
    {
        id: 1,
        title: "Revive Sunday Live Service with the Gold Lake Church",
        name: "PAstor Bro",
        image: ThumbThree,
        description: "Praise Hill",
        views: "51k",
        stream: "Streamed 2 days ago"
    },
]

function Ministry(){
    return(
        <>
        <div className="bg-black py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto mb-10">
                <h2 className="text-white text-3xl font-bold">Latest Sermons</h2>
            </div>
            <div className='flex flex-col justify-center items-center mt-4 bg-black py-20 gap-14 md:flex-row-reverse md:flex-wrap'>
                {/* A SWIPER FEATURE WOULD BE FIRE HERE */}
                {data.map((item) => (
                    <div 
                        key={item.id}
                        className='bg-black w-full max-w-96 flex-1 border border-solid'
                        // bg-black w-96 border border-solid
                    >
                    <div>
                        <img
                            src={item.image}
                            alt={item.title}
                            className='rounded-xl w-full'
                        ></img>
                    </div>
                    <div className='#'>
                        <h2 className='text-white text-2xl'>
                            {item.title}
                        </h2>
                        <p className='text-gray-300 text-base'>
                            {item.description}
                        </p>
                        <div className='flex gap-2'>
                            <p className='text-base text-gray-300'>
                                {item.views}
                            </p>
                            <p className='text-base text-gray-300'>
                                {item.stream}
                            </p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}
//*939*33# {/* A SWIPER FEATURE WOULD BE FIRE HERE */} // 
export default Ministry