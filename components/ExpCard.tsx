import { ReactNode } from 'react';

interface ExpDet {
    name: string;
    desc: string;
    icon: ReactNode;
}

const ExpCard = ({name, desc, icon}: ExpDet) => {
  return (
    <div className='flex items-center gap-4'>
            <span className='w-12 h-12 rounded-full bg-black border-[1px] border-white flex items-center justify-center'>
                {icon}
            </span>
            <div>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='text-lg tracking-wide text-gray-400'>{desc}</p>
            </div>
        </div>
  )
}

export default ExpCard