import Image from 'next/image'
import {BsArrowUpRight} from 'react-icons/bs'
import path from 'path';

interface ProjDet {
    ch: string;
    proj: string;
    url: string;
    img: string;
    tools: string;
    desc: string;
}

const ProjCard = ({ch, proj, url, img, tools, desc}: ProjDet) => {
  if (ch === '1') {
    return (
      <div className='flex flex-col md:flex-row gap-20 border-[1px] border-blue-600 rounded-lg '>
        <div className='md:w-96 w-auto h-96 overflow-hidden relative rounded-lg group'>
          <a href={url} target='_blank'>
          <Image className='object-cover object-right-top translate-x-0 group-hover:zoom-image' 
            fill
            //style={{position:'absolute', top:'0px'}}
            src={img} alt={proj} />
            {/* <p className='absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-purple-600 text-white text-center font-semibold duration-300'>
              {proj}
            </p> */}
          </a>
        </div>
        <div className='max-w-xl p-3'>
          <h2 className='pt-3 md:pt-8 font-extrabold text-3xl'>{proj}</h2>
          <p className='pt-4 text-lg'>
            {desc}
          </p>
          <p className='pt-4 text-xl text-purple-600 font-bold'>
            Languages/Tools: {tools}
          </p>
          <a href={url} target='_blank' className='pt-6 flex gap-2 text-xl text-gray-400 font-semibold group'>
                <p>GitHub Repo</p>
                <BsArrowUpRight className='arrowMove' />
            </a>
        </div>
      </div>
    )
  }

  else if (ch === '2') {
    return (
      <div className='flex flex-col md:flex-row gap-20 border-[1px] border-blue-600 rounded-lg'>
        <div className='md:w-96 w-auto h-96 overflow-hidden relative rounded-lg group'>
          <a href={url} target='_blank'>
          <Image className='object-cover scale-custom group-hover:slide-image' 
            //fill
            width={1150}
            height={650}
            //style={{position:'absolute', top:'0px'}}
            src={img} alt={proj} />
            {/* <p className='absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-purple-600 text-white text-center font-semibold duration-300'>
              {proj}
            </p> */}
          </a>
        </div>
        <div className='max-w-lg p-3'>
          <h2 className='pt-3 md:pt-10 font-extrabold text-3xl'>{proj}</h2>
          <p className='pt-4 text-lg'>
            A chrome extension to increase productivity by limiting distracting elements on the internet. The extension aims to give back the time
            lost to unproductive and addictive elements on the internet.
          </p>
          <p className='pt-4 text-xl text-purple-600 font-bold'>
            Languages/Tools: {tools}
          </p>
          <a href={url} target='_blank' className='pt-6 flex gap-2 text-xl text-gray-400 font-semibold group'>
                <p>GitHub Repo</p>
                <BsArrowUpRight className='arrowMove' />
            </a>
        </div>
      </div>
    )
  }
}

export default ProjCard