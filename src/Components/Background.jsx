import React from 'react'

function Background() {
    return (
    <div className='fixed w-full h-screen z-10'>
        <nav className='w-full py-12 flex justify-center text-zinc-200 font-semibold text-xl selection:text-green-200'>Documents.</nav>
        <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-500 text-[12rem] selection:text-green-300'>Docs.</h1>
    </div>
    )
}

export default Background