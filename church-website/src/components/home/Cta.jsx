import { useState } from 'react'


function Cta(){
    return(
        <>
            <div>
                <div>
                    <h2 className='text-3xl font-extralight'>SUPPORT THE WORK OF GOD </h2>
                </div>
                <button className='inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100'>Give Now</button>
            </div>
        </>
    )
}

export default Cta