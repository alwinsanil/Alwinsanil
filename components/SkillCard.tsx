interface SkDet {
    name: string;
    url: string;
}

const SkillCard = ({name, url}: SkDet) => {
  return (
    <div>
        <div className='flex'>
            <a href={url} target='_blank'>
                <p className='border border-blue-800 px-6 py-2 text-lg tracking-wide text-gray-400 hover:text-white
                hover:border-blue-600 hover:bg-black rounded-lg duration-300'>
                    {name}
                </p>
            </a>
        </div>
    </div>
  )
}

export default SkillCard