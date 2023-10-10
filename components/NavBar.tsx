import React from 'react'

const NavBar = () => {
  return (
    <div className='invisible md:visible pt-20 pl-30 pr-30 flex flex-row justify-center gap-3'>
        <div className='flex items-center group'>
            <h3 className='text-2xl font-semibold relative overflow-hidden'>
                <a href='#exp'>
                    Experience{""}
                </a>
            <span className='w-full h-[2px] absolute bottom-0 left-0 inline-block
            bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
         </h3>
    </div>
    <div className='text-2xl font-semibold relative'>
        |
    </div>
    <div className='flex items-center group'>
        <h3 className='text-2xl font-semibold relative overflow-hidden'>
            <a href='#skills'>
                Skills{""}
            </a>
        <span className='w-full h-[2px] absolute bottom-0 left-0 inline-block
        bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
        </h3>
    </div>
    <div className='text-2xl font-semibold relative'>
        |
    </div>
    <div className='flex items-center group'>
        <h3 className='text-2xl font-semibold relative overflow-hidden'>
            <a href='#projects'>
                Projects{""}
            </a>
        <span className='w-full h-[2px] absolute bottom-0 left-0 inline-block
        bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
        </h3>
    </div>
    <div className='text-2xl font-semibold relative'>
        |
    </div>
    <div className='flex items-center group'>
        <h3 className='text-2xl font-semibold relative overflow-hidden'>
            <a href='#cont'>
                Contact{""}
            </a>
        <span className='w-full h-[2px] absolute bottom-0 left-0 inline-block
        bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
        </h3>
    </div>
    </div>
  )
}

export default NavBar