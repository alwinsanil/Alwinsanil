import Title from './Title'
import {DiGoogleAnalytics} from 'react-icons/di'
//import {GiSkills} from 'react-icons/gi'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='wrapper'>
        <Title text='Skills' icon={<DiGoogleAnalytics />} />
        <div className='flex gap-6 flex-wrap'>
            <SkillCard name='JavaScript' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
            <SkillCard name='React' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
            <SkillCard name='Python' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
            <SkillCard name='SQL' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
            <SkillCard name='Advanced Excel' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
            <SkillCard name='Database' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
            <SkillCard name='Power BI' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
        </div>
    </div>
  )
}

export default Skills