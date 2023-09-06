import Image from 'next/image'
import profilePic from '../public/img/profilepic.jpg'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-10 wrapper'>
    {/*Image*/}
    <div className='w-40 h-40 rounded-full bg-black'>
        <Image className='w-full h-full rounded-full border-[1px] border-white p-2 object-cover' src={profilePic} alt="ProfilePic" />
    </div>
    {/*Desc*/}
    <div className='w-3/4 flex flex-col text-center md:text-start gap-2'>
        <h1 className='text-5xl font-bold text-white'>Alwin Sanil</h1>
        <h3 className='text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-red-600 tracking-wide'>Full Stack Developer</h3>
        <p className='text-base tracking-wide pt-3 text-center md:text-left'>
            With a Bachelors degree in Computer Science & Engineering, I keep learning and growing everyday. I’m
            a quick learner who is always eager to explore new topics that interest me. I always strive to find better
            ways to deliver high-quality results. I’m a goal-oriented person who is determined to achieve my
            objectives by any means.
        </p>
    </div>
    </div>
  )
}

export default Banner