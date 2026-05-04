import { useState } from 'react'

import ThumbOne from '../assets/download (1).jpeg'
import ThumbTwo from '../assets/download (2).jpeg'
import ThumbThree from '../assets/download.jpeg'

const data = [
    {
        id: 1,
        title: "Miracle Service",
        name: "PAstor Bro",
        image: ThumbOne,
        description: "Praise Hill",
        views: "213k",
        stream: "7 hours ago"
    },
    {
        id: 1,
        title: "Miracle Service",
        name: "PAstor Bro",
        image: ThumbOne,
        description: "Praise Hill",
        views: "302k",
        stream: "Streamed 7 hours ago"
    },
    {
        id: 1,
        title: "Miracle Service",
        name: "PAstor Bro",
        image: ThumbOne,
        description: "Praise Hill",
        views: "51k",
        stream: "Streamed 2 days ago"
    },
]

function Ministry(){
    return(
        <>
        <div>
            {data.map((item) => (
                <div 
                    key={item.id}
                    className='bg-slate-100'
                >
                <img
                    src={item.image}
                    alt={item.title}
                    className='rounded-xl'
                ></img>
                <div>
                    <h2 className='text-gray-500'>
                        {item.title}
                    </h2>
                    <p className='text-gray-500'>
                        {item.description}
                    </p>
                    <div>
                        <p>
                            {item.views}
                        </p>
                        <p>
                            {item.stream}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}
    
export default Ministry