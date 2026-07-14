import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'

interface Props {
  proj: string;
  desc: string;
  tools: string[];
  img: string;
  url: string;
}

const CompactProjectCard = ({ proj, desc, tools, img, url }: Props) => {
  return (
    <a href={url} target="_blank" className="block border border-border hover:border-accent rounded-lg overflow-hidden transition-colors duration-300 group">
      <div className="h-40 relative">
        <Image className="object-cover group-hover:scale-105 transition-transform duration-300" fill src={img} alt={proj} />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{proj}</h3>
          <BsArrowUpRight className="text-muted group-hover:text-accent" />
        </div>
        <p className="text-sm text-muted mt-1 mb-2">{desc}</p>
        <div className="flex flex-wrap gap-1">
          {tools.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted">{t}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default CompactProjectCard