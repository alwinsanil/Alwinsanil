import ExpCard from './ExpCard'
import Title from './Title'
import { MdSchool } from 'react-icons/md'

const educationData = [
  {
    title: 'Master of Applied Computer Science',
    org: 'Dalhousie University',
    period: 'Completed April 2026',
    description: 'GPA 4.15/4.30. Advanced coursework building on undergraduate CS foundation.',
  },
  {
    title: 'Bachelor of Technology in Computer Science',
    org: 'Dr. APJ Abdul Kalam Technical University, India',
    period: 'July 2019 – June 2023',
    description: 'CGPA 8.37/10. Built the core foundation in data structures, algorithms, and systems design that carried into professional work at Lindner Group straight after graduating.',
  },
];

const Education = () => {
  return (
    <div id="education" className="wrapper">
      <Title text="Education" icon={<MdSchool />} />
      <div className="mt-2">
        {educationData.map((entry, i) => (
          <ExpCard
            key={`${entry.org}-${i}`}
            accent="education"
            {...entry}
            isLast={i === educationData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Education