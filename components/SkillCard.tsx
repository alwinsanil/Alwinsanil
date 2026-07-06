interface SkDet {
  name: string;
  url: string;
  tier?: 'primary' | 'secondary';
}

const SkillCard = ({ name, url, tier = 'primary' }: SkDet) => {
  const style =
    tier === 'primary'
      ? 'border-blue-700 bg-blue-950/30 text-gray-200 hover:bg-blue-900/40 hover:border-blue-500'
      : 'border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-500';

  const content = (
    <p className={`border px-4 py-1.5 text-sm tracking-wide rounded-full duration-300 ${style}`}>
      {name}
    </p>
  );

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default SkillCard