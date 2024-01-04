import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
    id:1,
    description: 'This is the background color of the card that will be displayed.',
    fileSize:'.6mb',
    close: false,
    tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-400'}
  },
  {
    id: 2,
    description: 'This is the background color of the card that will be displayed.',
    fileSize:'.4mb',
    close: true,
    tag: {isOpen: false, tagTitle: 'Download Now', tagColor: ''}
  },
  {
    id: 2,
    description: 'This is the background color of the card that will be displayed.',
    fileSize:'.9mb',
    close: false,
    tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-red-400'}
  }
]
  return (
    <div ref={ref} className='fixed w-full h-full z-30 px-5 py-32 flex justify-center gap-5 flex-wrap'>
        {
          data.map(item => (
            <Card data={item} key={item.id} reference={ref}/>
          ))
        }
    </div>
  )
}

export default Foreground