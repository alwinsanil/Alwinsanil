import { SiReactivex } from 'react-icons/si'
import ExpCard from './ExpCard'
import Title from './Title'
import {MdWork} from 'react-icons/md'


const Experience = () => {
  return (
    <div id='exp' className='wrapper'>
        <Title text='Experience' icon={<MdWork />} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <ExpCard name='Alderaa.com | Freelance' desc='Web Developer | 2022' icon={<SiReactivex className='text-2xl' />} />
            {/* <ExpCard name='ABC' desc='XYZ' icon={<SiReactivex className='text-2xl' />} />
            <ExpCard name='DEF' desc='YJK' icon={<SiReactivex className='text-2xl' />} />
            <ExpCard name='HIJ' desc='LMN' icon={<SiReactivex className='text-2xl' />} /> */}
        </div>
    </div>
  )
}

export default Experience