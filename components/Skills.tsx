import Title from './Title'
import { DiGoogleAnalytics } from 'react-icons/di'
import SkillCard from './SkillCard'

interface SkillGroup {
  label: string;
  skills: { name: string; url: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'JavaScript', url: 'https://www.javascript.com/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'Java', url: 'https://www.java.com/en/' },
      { name: 'Python', url: 'https://www.w3schools.com/python/' },
      { name: 'SQL', url: 'https://www.w3schools.com/sql/' },
      { name: 'C', url: 'https://www.w3schools.com/c/c_intro.php' },
      { name: 'HTML', url: 'https://www.w3schools.com/html/' },
      { name: 'CSS', url: 'https://www.w3schools.com/css/' },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'Express', url: 'https://expressjs.com/' },
      { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
      { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      { name: 'JUnit', url: 'https://junit.org/junit5/' },
    ],
  },
  {
    label: 'Cloud & Data',
    skills: [
      { name: 'AWS', url: 'https://aws.amazon.com/' },
      { name: 'Azure', url: 'https://azure.microsoft.com/' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'Git', url: 'https://git-scm.com/' },
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Kubernetes', url: 'https://kubernetes.io/' },
      { name: 'Terraform', url: 'https://www.terraform.io/' },
    ],
  },
  {
    label: 'Tools & Methods',
    skills: [
      { name: 'Agile/Scrum', url: '' },
      { name: 'Figma', url: 'https://www.figma.com/' },
      { name: 'Power BI', url: 'https://powerbi.microsoft.com/en-us/' },
      { name: 'Automation', url: '' },
      { name: 'Testing', url: '' },
      { name: 'REST APIs', url: 'https://www.geeksforgeeks.org/rest-api-introduction/' },
      { name: 'GraphQL', url: 'https://graphql.org/' },
      { name: 'CI/CD', url: '' },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="wrapper">
      <Title text="Skills" icon={<DiGoogleAnalytics />} />

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h4 className="text-sm uppercase tracking-wider text-muted mb-2">{group.label}</h4>
            <div className="flex gap-3 flex-wrap">
              {group.skills.map((s) => (
                <SkillCard key={s.name} name={s.name} url={s.url} tier="primary" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills