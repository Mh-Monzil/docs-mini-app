import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card(props) {
    const {description,fileSize,close,tag,reference} = props.data;
    return (
        <motion.div drag  dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative w-60 h-72 bg-slate-300 rounded-[40px] px-7 py-8 overflow-hidden'>
            <span className='h-7 w-7'>
                <FaRegFileAlt size='1.2rem'/>
            </span>
            <p className='text-sm mt-5'>{description}</p>
            <footer className='w-full absolute  left-0 bottom-0'>
                <div className='flex justify-between items-center px-7 py-4'>
                    <h5>{fileSize}</h5>
                    <span className='h-7 w-7 bg-slate-200 flex items-center justify-center rounded-full cursor-pointer'>
                        {
                            close ? <IoClose /> : <FiDownload />
                        }
                    </span>
                </div>
                {
                    tag.isOpen &&  (
                        <div className={`w-full h-14 ${tag.tagColor} flex justify-center items-center`}>
                            <h3 className='text-sm font-semibold'>{tag.tagTitle}</h3>
                        </div>
                    )
                }
                
            </footer>
        </motion.div>
    )
}

export default Card;