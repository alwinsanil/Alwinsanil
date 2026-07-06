'use client';
import { useState } from 'react';
import { MdWork, MdSchool, MdExpandMore } from 'react-icons/md';

interface ExpDet {
  accent: 'work' | 'education';
  title: string;
  org: string;
  period: string;
  description?: string;
  duties?: string[];
  tags?: string[];
  isLast?: boolean;
}

const accentMap = {
  work: { border: 'border-blue-600', text: 'text-blue-500', bar: 'border-l-blue-600' },
  education: { border: 'border-blue-600', text: 'text-blue-500', bar: 'border-l-blue-600' },
};

const ExpCard = ({ accent, title, org, period, description, duties, tags, isLast }: ExpDet) => {
  const [open, setOpen] = useState(false);
  const c = accentMap[accent];
  const icon = accent === 'work' ? <MdWork className="text-xl" /> : <MdSchool className="text-xl" />;
  const hasDetail = !!description || (duties && duties.length > 0);

  return (
    <div className="relative pl-14 pb-10 last:pb-0">
      {!isLast && <span className="absolute left-4 top-10 bottom-0 w-[2px] bg-gray-800" />}
      <span className={`absolute left-0 top-0 w-9 h-9 rounded-full bg-gray-950 border-2 ${c.border} ${c.text} flex items-center justify-center`}>
        {icon}
      </span>

      <div
        onClick={() => hasDetail && setOpen(!open)}
        className={`group border-l-2 ${c.bar} pl-4 py-1 rounded-r-md transition-colors duration-200 ${hasDetail ? 'cursor-pointer hover:bg-gray-900/60' : ''}`}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-gray-100">{title}</h3>
            <p className="text-sm tracking-wide text-gray-500 mb-2">{org} &middot; {period}</p>
          </div>
          {hasDetail && (
            <MdExpandMore className={`text-3xl text-gray-400 shrink-0 transition-transform duration-300 group-hover:text-blue-400 ${open ? 'rotate-180' : ''}`} />
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-900 border border-gray-700 text-gray-400">{tag}</span>
            ))}
          </div>
        )}

        {hasDetail && (
          <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              {description && <p className="text-base text-gray-400 leading-relaxed max-w-xl mb-2">{description}</p>}
              {duties && duties.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                  {duties.map((d) => <li key={d}>{d}</li>)}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpCard;