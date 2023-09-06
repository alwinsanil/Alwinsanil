import Title from "./Title"
import {TiInfoLarge} from 'react-icons/ti'


const AboutMe = () => {
  return (
    <div className='wrapper'>
        <Title text='About Me' icon={<TiInfoLarge />}/>
        <div className="text-sm tracking-wide flex flex-col gap-6">
            <p>
                With a Bachelors degree in Computer Science & Engineering, I keep learning and growing everyday. I’m
                a quick learner who is always eager to explore new topics that interest me. I always strive to find better
                ways to deliver high-quality results. I’m a goal-oriented person who is determined to achieve my
                objectives by any means.
            </p>
        </div>
    </div>
  )
}

export default AboutMe