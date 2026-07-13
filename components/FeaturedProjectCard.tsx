import Image from 'next/image'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

interface Props {
  proj: string;
  desc: string;
  bullets: string[];
  tools: string[];
  img: string;
  repoUrl: string;
  liveUrl?: string;
  reverse?: boolean;
}

const FeaturedProjectCard = ({ proj, desc, bullets, tools, img, repoUrl, liveUrl, reverse }: Props) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
      <div className="md:w-1/2 w-full h-72 relative rounded-lg overflow-hidden border border-blue-700 group">
        <a href={liveUrl || repoUrl} target="_blank">
          <Image className="object-cover group-hover:scale-105 transition-transform duration-300" fill src={img} alt={proj} />
        </a>
      </div>
      <div className="md:w-1/2 w-full">
        <h2 className="font-extrabold text-3xl mb-3">{proj}</h2>
        <p className="text-lg text-gray-400 mb-3">{desc}</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm mb-4">
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-950/30 border border-blue-700 text-gray-300">{t}</span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={repoUrl} target="_blank" className="flex items-center gap-1 text-gray-400 hover:text-white font-semibold">
            <BsGithub /> Code
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" className="flex items-center gap-1 text-gray-400 hover:text-white font-semibold">
              Live <BsArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectCard