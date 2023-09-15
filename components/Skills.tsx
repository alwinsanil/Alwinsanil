import Title from './Title'
import {DiGoogleAnalytics} from 'react-icons/di'
//import {GiSkills} from 'react-icons/gi'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div id='skills' className='wrapper'>
        <Title text='Skills' icon={<DiGoogleAnalytics />} />
        <div className='flex gap-6 flex-wrap'>
            <SkillCard name='JavaScript' url='https://github.com/alwinsanil' />
            <SkillCard name='Python' url='https://github.com/alwinsanil' />
            <SkillCard name='SQL' url='https://github.com/alwinsanil' />
            <SkillCard name='Reactjs' url='https://github.com/alwinsanil' />
            <SkillCard name='Nextjs' url='https://github.com/alwinsanil' />
            <SkillCard name='Advanced Excel' url='https://github.com/alwinsanil' />
            <SkillCard name='C++' url='https://github.com/alwinsanil' />
            <SkillCard name='C Programming' url='https://github.com/alwinsanil' />
            <SkillCard name='Nodejs' url='https://github.com/alwinsanil' />
            <SkillCard name='HTML5' url='https://github.com/alwinsanil' />
            <SkillCard name='CSS' url='https://github.com/alwinsanil' />
            <SkillCard name='GitHub' url='https://github.com/alwinsanil' />
            <SkillCard name='Git' url='https://github.com/alwinsanil' />
            <SkillCard name='Tailwind CSS' url='https://github.com/alwinsanil' />
            <SkillCard name='Databases' url='https://github.com/alwinsanil' />
            <SkillCard name='Power BI' url='https://github.com/alwinsanil' />
            <SkillCard name='Tableau' url='https://github.com/alwinsanil' />
        </div>
    </div>
  )
}

export default Skills