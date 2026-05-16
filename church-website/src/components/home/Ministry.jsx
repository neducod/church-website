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
        title: "Children Unit",
        description: "jd",
        image: ImageFive
    },
    {
        id: 1,
        title: "Youth Ministry",
        description: "Helping young believers grow in faith,understanding and leadership",
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
        title: "Choir Ministry",
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
            <div className='flex justify-center items-center flex-col gap-8 mt-40 sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap md:gap-16'>
                {/* NEW COMPLETE STYLING FOR IPAD MINI */}
                <div className='max-w-2xl'>
                    <h2 className='text-lg'>OUR COMMUNITY</h2>
                    <p>Ministries For Every Generation</p>
                    <p>Find a community where you can grow spiritually,
serve others, and build meaningful relationships.</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-8 sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap md:gap-16'>
                    {data.map((item) => (
                        <div 
                            key={item.id}
                            className='w-90 bg-slate-100 rounded-2xl shadow-2xs p-4 hover:shadow-2xl transition flex flex-row gap-4 max-w-2xl '
                        >
                        <img
                            src={item.image}
                            alt={item.title}
                            className='h-38 rounded-xl'
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

            </div>
        </>
    )
}

export default Ministry