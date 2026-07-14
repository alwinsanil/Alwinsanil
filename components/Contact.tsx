import Socials from "./Socials"


const Contact = () => {
  return (
    <div id="contact" className='wrapper'>
        <div className='max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center'>
            <h2 className='text-4xl font-bold text-center'>Let&apos;s Get in Touch</h2>
            <p className='text-lg tracking-wide font-medium text-center'>
                Open to full-stack, DevOps, and Cloud roles across Canada. Reach out directly or connect below.
            </p>
            <div className='flex gap-4'>
              <a href='mailto:alwinsanil@gmail.com'>
                  <button className='w-52 h-14 text-white bg-gradient-to-r from-violet-600 to-blue-800 font-extrabold text-xl rounded-lg
                    hover:from-blue-800 hover:to-violet-600'>Say Hello!</button>
              </a>
              {/* TODO: confirm actual resume filename in /public */}
              <a href='https://drive.google.com/file/d/1c8VFNEWVC3ZNE7_WCW4wrCu3XlWNGxCj/view?usp=share_link' target='_blank'>
                  <button className='w-52 h-14 border-2 border-blue-600 font-extrabold text-xl rounded-lg
                  hover:bg-blue-950/30'>Resume</button>
              </a>
            </div>
        </div>
        <div className='mt-10 items-center flex justify-center gap-6'>
            <Socials name='GitHub' url='https://github.com/alwinsanil' />
            <Socials name='LinkedIn' url='https://www.linkedin.com/in/alwin-sanil-63a27a210/' />
        </div>
    </div>
  )
}

export default Contact