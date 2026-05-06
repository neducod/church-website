import { useState } from 'react'


function Cta(){
    return(
        <>
            <div className='flex flex-col flex-wrap gap-2 p-6'>
                <div className='flex gap-2 flex-col'>
                    <h2 className='text-3xl text-[#141516]'>SUPPORT THE WORK OF GOD </h2>
                    <p className='text-3xl font-extralight bg-[#141516] text-white p-2 italic'>Join us in serving God's coummunity.</p>
                </div>
                {/* <button className='inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100'>Give Now</button> */}
                <button className='cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-4 text-white'>Give Now</button>
            </div>
        </>
    )
}

export default Cta