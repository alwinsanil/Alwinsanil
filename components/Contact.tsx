import Socials from "./Socials"


const Contact = () => {
  return (
    <div className='wrapper'>
        <div className='max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center'>
            <h2 className='text-4xl font-bold text-center'>Let us Get in Touch</h2>
            <p className='text-lg tracking-wide font-medium text-center'>
                I am always looking for any exciting opportunities that comes my way. Let us get together 
                and build something great, unique and meaningful. Contact me for any questions or inquiries.
            </p>
            <a href='mailto:alwinsanil@gmail.com'>
                <button className='w-52 h-14 bg-gradient-to-r from-violet-600 to-blue-800 font-extrabold text-xl rounded-lg
                hover:from-blue-800 hover:to-violet-600'>Say Hello!</button>
            </a>
        </div>
        <div className='mt-10 items-center grid grid-cols-2 md:grid-cols-4 gap-6'>
            <Socials name='GitHub' url='https://github.com/alwinsanil' />
            <Socials name='LinkedIn' url='https://www.linkedin.com/in/alwin-sanil-63a27a210/' />
            <Socials name='Instagrm' url='https://www.instagram.com/alwin.sanil/?hl=en' />
            <Socials name='Twitter' url='https://www.linkedin.com/in/alwin-sanil-63a27a210/' />
        </div>
    </div>
  )
}

export default Contact