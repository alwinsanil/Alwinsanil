import ExpCard from './ExpCard'
import Title from './Title'
import { MdWork } from 'react-icons/md'

const experienceData = [
  {
    title: 'Web Developer Intern',
    org: 'ChangeMakers, Halifax, NS',
    period: 'January 2026 – May 2026',
    description:
      'Developed, maintained and audited multiple client websites, including accessibility audits and fixes, across a variety of tech stacks.',
    duties: [
      'Served as sole developer on 3 client projects evaluating feasibility, flagging tradeoffs to project managers, and redirecting scope when needed, owning full delivery from spec to launch.',
      'Delivered all commitments on time across 6 simultaneous client projects, including 2 with fixed tight deadlines, building across WordPress, JavaScript, React, and SQL.',
      'Systematically debugged and resolved a critical, long-standing cross-site rendering issue within the first 4 weeks of joining, successfully clearing a legacy backlog item.',
      'Audited and resolved WCAG 2.1 AA accessibility violations across 4+ client sites, working through contrast, keyboard navigation, and ARIA label fixes that had accumulated across multiple codebases.',
    ],
    tags: ['WordPress', 'React', 'JavaScript', 'SQL', 'WCAG 2.1 AA'],
  },
  {
    title: 'Application Developer',
    org: 'Lindner Group, Dubai, UAE',
    period: 'July 2023 – November 2024',
    description:
      'Built an internal procurement and inventory system from scratch, replacing a spreadsheet-based workflow used daily by 30+ users across regional operations.',
    duties: [
      'Automated purchase order generation, cutting a 20+ minute manual process to under 2 minutes.',
      'Optimized MongoDB queries, reducing average response time from 2.3s to under 400ms via index restructuring and query projection.',
      'Deployed on AWS (EC2, S3, RDS), containerized with Docker, and configured GitHub Actions CI/CD, moving release frequency from monthly to weekly with zero failed production deployments.',
    ],
    tags: ['TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Website Developer',
    org: 'Al Deraa Steel, Dubai, UAE',
    period: 'December 2022 – February 2023',
    description: 'Developed a company portfolio website using WordPress, built responsive and user-friendly.',
    duties: [
      'Implemented SEO best practices, enhancing visibility and traffic with a 10% increase in online presence.',
    ],
    tags: ['WordPress', 'SEO'],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="wrapper">
      <Title text="Experience" icon={<MdWork />} />
      <div className="mt-2">
        {experienceData.map((entry, i) => (
          <ExpCard
            key={`${entry.org}-${i}`}
            accent="work"
            {...entry}
            isLast={i === experienceData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience