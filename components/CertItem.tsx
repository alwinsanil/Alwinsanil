import {BsArrowUpRight} from 'react-icons/bs'

interface Cert {
    name: string;
    desc: string;
    url: string;
}


const CertItem = ({name, desc, url}: Cert) => {
  return (
    <div className='gap-4'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='text-lg tracking-wide text-gray-400'>
            {desc}
        </p>
        <a href={url} 
            target='_blank' 
            className='flex gap-2 group text-lg tracking-wide text-gray-400'>
            <p>Link</p>
            <BsArrowUpRight className='arrowMove' />
        </a>
    </div>
  )
}

export default CertItem