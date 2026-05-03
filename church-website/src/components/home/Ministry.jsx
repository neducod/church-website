import { useState } from 'react'

import ImageOne from '../assets/youthm.jpeg' 
import ImageTwo from '../assets/outreach.jpeg'
import ImageThree from '../assets/womenFellowship.jpeg'
import ImageFour from '../assets/choir.jpeg'
import ImageFive from '../assets/childenChurch.jpeg'
import ImageSix from '../assets/menfellowship.jpeg'

const data = [
    {
        id: 1,
        title: "Children Ministry",
        description: "jd",
        image: ImageFive
    },
    {
        id: 1,
        title: "Youth Ministry",
        description: "jd",
        image: ImageOne
    },
    {
        id: 1,
        title: "Women Fellowship",
        description: "jd",
        image: ImageThree
    },
    {
        id: 1,
        title: "Men Fellowship",
        description: "jd",
        image: ImageSix
    },
    {
        id: 1,
        title: "Choir",
        description: "jd",
        image: ImageFour
    },
    {
        id: 1,
        title: "Outreach",
        description: "jd",
        image: ImageTwo
    }
]

function Ministry(){
    return(
        <>
            <div>
                {data.map((item) => (
                    <div 
                        key={item.id}
                        className='w-40 bg-red-500'
                    >
                    <img
                        src={item.image}
                        alt={item.title}
                        className='w-full'
                    ></img>
                    <div>
                        <h2 className='text-black'>
                            {item.title}
                        </h2>
                        <p className='text-blac'>
                            {item.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default Ministry