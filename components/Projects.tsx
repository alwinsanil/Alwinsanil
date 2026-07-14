import Title from "./Title";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import dwb from "../public/img/DWB.png";
import cda from "../public/img/cda.webp";
import ps from "../public/img/ProjectStream.png"
import ds from "../public/img/DALScooter.png"
import nw from "../public/img/nw.jpg";
import ecUser from "../public/img/ecommerce-user.png";
import medilink from "../public/img/MediLink.png";
import FeaturedProjectCard from "./FeaturedProjectCard";
import CompactProjectCard from "./CompactProjectCard";

const featured = [
  {
    proj: "ProjectStream — Jira Lite",
    desc: "A full-stack project management tool built for both technical and non-technical teams to manage work on one platform.",
    bullets: [
      "React front end, Spring Boot backend, JUnit-tested.",
      "CI/CD deployment pipeline to VMs.",
    ],
    tools: ["React", "Java", "Spring Boot", "MySQL", "CI/CD"],
    img: ps.src,
    repoUrl: "https://github.com/alwinsanil/ProjectStream",
    liveUrl: "https://project-stream-black.vercel.app",
  },
  {
    proj: "MediLink — Virtual Care SaaS Platform",
    desc: "HIPAA-aligned telehealth platform for elderly and accessibility-focused users, with secure video consultations, pharmacy locator, prescription reminders, and automated payments.",
    bullets: [
      "Engineered WebRTC video handling up to 40 concurrent connections with low latency.",
      "Secured with JWT, bcrypt hashing, and HTTPS-only cookie handling.",
    ],
    tools: ["MERN", "WebRTC", "Tailwind CSS", "JWT"],
    img: medilink.src,
    repoUrl: "https://github.com/alwinsanil/MediLink",
    liveUrl: "https://medilink-six.vercel.app",
    reverse: true,
  },
  {
    proj: "DALScooter eCommerce",
    desc: "A fully serverless eCommerce app to rent bikes and e-scooters, built on a multi-cloud AWS + Azure environment.",
    bullets: [
      "Auto-scaling, serverless architecture using Lambda, DynamoDB, SNS/SQS.",
      "Automated CI/CD pipelines provisioned via Terraform.",
    ],
    tools: ["AWS", "Azure", "Lambda", "DynamoDB", "Terraform", "Cognito"],
    img: ds.src,
    repoUrl: "https://github.com/alwinsanil/DALScooter",
    liveUrl: "https://main.dnctgkfwwxgms.amplifyapp.com",
  },
];

const compact = [
  {
    proj: "eCommerce Platform",
    desc: "Full eCommerce system with separate user and admin apps — Stripe checkout, admin inventory/order management.",
    tools: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    img: ecUser.src,
    url: "https://github.com/alwinsanil/ECommerce-User",
  },
  {
    proj: "Digital WellBeing",
    desc: "Chrome extension limiting distracting elements to improve productivity.",
    tools: ["JavaScript", "HTML", "CSS"],
    img: dwb.src,
    url: "https://github.com/alwinsanil/Digital-WellBeing",
  },
  // {
  //   proj: "Cricket Data Analytics",
  //   desc: "Data-driven analysis of 2022 T20 World Cup stats to build the best playing XI.",
  //   tools: ["Python", "Power BI", "Excel"],
  //   img: cda.src,
  //   url: "https://github.com/alwinsanil/Cricket-Data-Analytics",
  // },
  {
    proj: "NewWave Music App",
    desc: "Decentralized music sharing app protecting copyright via blockchain.",
    tools: ["Blockchain", "React", "IPFS"],
    img: nw.src,
    url: "https://github.com/alwinsanil/NewWave",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="wrapper">
      <Title text="Projects" icon={<AiOutlineFundProjectionScreen />} />
      <div className="flex flex-col gap-20 mb-16">
        {featured.map((p) => <FeaturedProjectCard key={p.proj} {...p} />)}
      </div>
      <h3 className="text-xl font-semibold text-muted mb-6">Other Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {compact.map((p) => <CompactProjectCard key={p.proj} {...p} />)}
      </div>
    </div>
  );
};

export default Projects;