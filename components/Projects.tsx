import Title from './Title'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import amazonClone from '../public/img/amazonClone.webp'
import Image from 'next/image'
import ProjCard from './ProjCard'

const Projects = () => {
  return (
    <div className='wrapper'>
        <Title text='Projects' icon={<AiOutlineFundProjectionScreen />} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
            <ProjCard proj='Amazon Clone' url='https://github.com/alwinsanil?tab=repositories' img={amazonClone.src} />
            <ProjCard proj='ABC' url='https://github.com/alwinsanil?tab=repositories' img={amazonClone.src} />
            <ProjCard proj='DEF' url='https://github.com/alwinsanil?tab=repositories' img={amazonClone.src} />
            <ProjCard proj='XYZ' url='https://github.com/alwinsanil?tab=repositories' img={amazonClone.src} />
            <ProjCard proj='HIJ' url='https://github.com/alwinsanil?tab=repositories' img={amazonClone.src} />
            <ProjCard proj='LMN' url='https://github.com/alwinsanil?tab=repositories' img={amazonClone.src} />
        </div>
    </div>
  )
}

export default Projects