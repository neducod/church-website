import { useState } from 'react'

import ImageOne from '../assets/church.jpeg'

const data = [
    {
        id: 1,
        title: "Card One",
        subtitle: "Sunday Worship Service",
        description: "Sunday at 9:00AM",
        direction: "Praise Hill Auditiorim",
        image: '../assets/church.jpeg'
    },
    {
        id: 2,
        title: "Card One",
        subtitle: "Midweek Service",
        description: "Wednesday at 5:00PM",
        direction: "Praise Hill Auditiorim"
    },
    {
        id: 3,
        title: "Card One",
        subtitle: "Youth Service",
        description: "Saturday at 4:00PM",
        direction: "Praise Hill Auditiorim"
    },
    {
        id: 4,
        title: "Card One",
        subtitle: "Prayer Meeting",
        description: "Friday at 6:00PM",
        direction: "Praise Hill Auditiorim"
    }
]


function ServiceTime(){
    return(
        <>
        <div className='bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm'>
            <h1 className='text-center text-slate-200 text-xl font-bold col-span-6'>Our Service Time</h1>
            <div className='bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm'>
                
            </div>
            <div className='bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600'></div>
        </div>


        <div className="flex flex-wrap gap-6 justify-center items-center">
            {data.map((item) => (
                <div 
                    key={item.id}
                    className='w-64 bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition'
                >
                <img 
                    src={item.image}
                    alt={item.title}
                    className='w-full h-40 object-cover rounded-xl'
                ></img>
                {/* <h2 className="text-xl font-bold mt-3">
                    {item.title}
                </h2> */}

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