import Image from 'next/image'
import path from 'path';
import { ReactNode } from 'react';

interface ProjDet {
    proj: string;
    url: string;
    img: string;
}

const ProjCard = ({proj, url, img}: ProjDet) => {
  return (
    <div><div className='w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group'>
    <a href={url} target='_blank'>
        <Image className='object-cover translate-y-0 group-hover:translate-y-[-65%] transition-transform duration-[3s]' 
        width={350}
        height={350}
        src={img} alt="AmazonClone" />
        <p className='absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-purple-600 text-white text-center font-semibold duration-300'>
            Amazon Clone
        </p>
    </a>
</div></div>
  )
}

export default ProjCard