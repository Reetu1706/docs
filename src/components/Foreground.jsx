import React, { useRef } from 'react'
import Card from './Card';


const Foreground = () => {

  const ref = useRef(null);

  const data =[
    {
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', 
    filesize: '.9mb', 
    close: false, 
    tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green ' }, 
  },
  {
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', 
  filesize: '.9mb', 
  close: true, 
  tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green ' }, 
},
{
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', 
filesize: '.9mb', 
close: true, 
tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green ' }, 
}
  ]

  return (
        <div ref={ref} className='fixed left-0 top-0 z-[3] w-full h-full flex flex-wrap p-5 gap-10'>
            {data.map((item, index)=>(
              <Card data={item} reference={ref} />
            ))}
        </div>
  )
}

export default Foreground;



//const data=[desc,filesize,closeOrdownload,tagdetails]