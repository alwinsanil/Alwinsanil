import {BsArrowUpRight} from 'react-icons/bs'

interface Soc {
    name: string;
    url: string;
}

const Socials = ({name, url}: Soc) => {
  return (
    <div>
        <a href={url} target='_blank' className='flex items-center justify-center gap-2 text-xl text-gray-400 font-semibold group'>
                <p>{name}</p>
                <BsArrowUpRight className='arrowMove' />
            </a>
    </div>
  )
}

export default Socials