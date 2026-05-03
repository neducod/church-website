import { useState } from 'react'


function ServiceTime(){
    return(
        <>
        <div className='bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm'>
            <h1 className='text-center text-slate-200 text-xl font-bold col-span-6'>Our Service Time</h1>
            <div className='bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm'>
                <img src="#" alt="" className='' />
            </div>
            <div className='bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600'></div>
        </div>
        </>
    )
}

export default ServiceTime