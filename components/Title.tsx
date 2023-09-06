import {ReactNode} from 'react'

interface Props {
    text:string;
    icon: ReactNode;
}

const Title = ({text, icon}: Props) => {
  return (
    <div className='flex item-center gap-2 group pb-8'>
        <h3 className='text-2xl font-semibold relative overflow-hidden'>{text}{""}
            <span className='w-full h-[2px] absolute bottom-0 left-0 inline-block
            bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
         </h3>
        <span className='text-3xl text-blue-600'>{icon}</span>
    </div>
  )
}

export default Title