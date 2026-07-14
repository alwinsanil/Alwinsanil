interface SkDet {
  name: string;
  url: string;
  tier?: 'primary' | 'secondary';
}

const SkillCard = ({ name, url, tier = 'primary' }: SkDet) => {
  const style =
    tier === 'primary'
      ? 'border-accent bg-accent-muted text-foreground hover:bg-accent-muted/70 hover:border-accent'
      : 'border-border text-muted hover:text-foreground hover:border-accent';

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