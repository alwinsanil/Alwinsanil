import Title from './Title'
import {DiGoogleAnalytics} from 'react-icons/di'
//import {GiSkills} from 'react-icons/gi'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div id='skills' className='wrapper'>
        <Title text='Skills' icon={<DiGoogleAnalytics />} />
        <div className='flex gap-6 flex-wrap'>
            <SkillCard name='TypeScript' url='https://www.typescriptlang.org/' />
            <SkillCard name='JavaScript' url='https://www.javascript.com/' />
            <SkillCard name='Python' url='https://www.w3schools.com/python/' />
            <SkillCard name='SQL' url='https://www.w3schools.com/sql/' />
            <SkillCard name='Reactjs' url='https://react.dev/' />
            <SkillCard name='Nextjs' url='https://nextjs.org/' />
            <SkillCard name='FastAPI' url='https://fastapi.tiangolo.com/' />
            <SkillCard name='Java' url='https://www.java.com/en/' />
            <SkillCard name='MongoDB' url='https://www.mongodb.com/' />
            <SkillCard name='REST APIs' url='https://www.geeksforgeeks.org/rest-api-introduction/' />
            <SkillCard name='Amazon AWS' url='https://aws.amazon.com/' />
            <SkillCard name='Advanced Excel' url='https://www.microsoft.com/en-us/microsoft-365/excel' />
            <SkillCard name='C Programming' url='https://www.w3schools.com/c/c_intro.php' />
            <SkillCard name='C++' url='https://www.w3schools.com/cpp/' />
            <SkillCard name='Nodejs' url='https://nodejs.org/en' />
            <SkillCard name='HTML5' url='https://www.w3schools.com/html/' />
            <SkillCard name='CSS' url='https://www.w3schools.com/css/' />
            <SkillCard name='GitHub' url='https://github.com/alwinsanil' />
            <SkillCard name='Git' url='https://git-scm.com/' />
            <SkillCard name='Tailwind CSS' url='https://tailwindcss.com/' />
            <SkillCard name='Styled Components' url='https://styled-components.com/' />
            <SkillCard name='Databases' url='' />
            <SkillCard name='Power BI' url='https://powerbi.microsoft.com/en-us/' />
            {/* <SkillCard name='Tableau' url='https://www.tableau.com/' /> */}
        </div>
    </div>
  )
}

export default Skills