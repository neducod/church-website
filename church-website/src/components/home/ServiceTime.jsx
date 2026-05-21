import { useState } from 'react'

import ImageOne from '../assets/church.jpeg'
import ImageTwo from '../assets/chruch.jpeg'
import ImageThree from '../assets/worship.jpeg'
import ImageFour from '../assets/youngsmallgroup.jpeg'


const data = [
    {
        id: 1,
        title: "Card One",
        subtitle: "Sunday Worship Service",
        description: "Sunday at 9:00AM",
        direction: "Praise Hill Auditiorim",
        image: ImageOne
    },
    {
        id: 2,
        title: "Card One",
        subtitle: "Midweek Service",
        description: "Wednesday at 5:00PM",
        direction: "Praise Hill Auditiorim",
        image: ImageTwo
    },
    {
        id: 3,
        title: "Card One",
        subtitle: "Youth Service",
        description: "Saturday at 4:00PM",
        direction: "Praise Hill Auditiorim",
        image: ImageThree
    },
    {
        id: 4,
        title: "Card One",
        subtitle: "Prayer Meeting",
        description: "Friday at 6:00PM",
        direction: "Praise Hill Auditiorim",
        image: ImageFour
    }
]


function ServiceTime(){
    return(
        <>

        <div className="flex flex-wrap gap-8 justify-center items-center mt-30">
            {data.map((item) => (
                <div 
                    key={item.id}
                    className='w-40 bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition'
                >
                <img 
                    src={item.image}
                    alt={item.title}
                    className='w-full h-40 object-cover rounded-xl'
                ></img>

                <h4 className="text-gray-500 text-sm">
                    {item.subtitle}
                </h4>

                <p className="text-gray-700 mt-2 text-sm">
                    {item.description}
                </p>
            </div>
            ))}
        </div>
        </>
    )
}

export default ServiceTime