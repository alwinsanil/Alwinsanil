import Title from "./Title";
import { TiInfoLarge } from "react-icons/ti";

const AboutMe = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<TiInfoLarge />} />
      <div className="text-sm tracking-wide flex flex-col gap-6">
        <p>
          Aspiring software developer with a strong foundation in Computer
          Science, seeking to leverage my skills in Python, front-end
          technologies, and data processing to contribute to highly innovative
          projects. I am dedicated to continuously upskilling and staying
          updated to deliver the most innovative and effective solutions to meet
          evolving demands.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
