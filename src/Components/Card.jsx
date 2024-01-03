import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";

function Card() {
    return (
        <div className='relative w-60 h-72 bg-slate-300 rounded-[30px] p-6 m-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</p>
            <footer className='w-full h-14 absolute bg-red-500 left-0 bottom-0'></footer>
        </div>
    )
}

export default Card;