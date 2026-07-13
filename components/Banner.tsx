import Image from 'next/image'
import profilePic from '../public/img/profilepic.jpg'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-top gap-10 wrapper">
      {/*Image*/}
      <div className="w-40 h-40 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-white p-2 object-cover"
          src={profilePic}
          alt="ProfilePic"
        />
      </div>
      {/*Desc*/}
      <div className="w-3/4 flex flex-col text-center md:text-start gap-2">
        <h1 className="text-5xl font-bold text-white">Alwin Sanil</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-red-600 tracking-wide">
          Full-Stack Developer
        </h3>
        <p className="text-base tracking-wide pt-3 text-center md:text-left">
          I build software that handles real business complexity — inventory systems, multi-cloud deployments, load-tested APIs — not tutorial projects. 
          Master&apos;s in Applied Computer Science from Dalhousie (4.15 GPA), and before that a Bachelor&apos;s in the same field. 
          At Lindner Group in Dubai I built a procurement and inventory system from scratch, the kind of ERP work most new grads never touch. 
          At ChangeMakers in Halifax I worked across the stack, from React and WordPress to accessibility audits that actually shipped.
          <br />
          <br />
          Right now I&apos;m deep in Java/Spring Boot, AWS and Azure, Docker, CI/CD — the stuff that keeps systems running, not just working. 
          DALScooter was multi-cloud with CloudWatch logging and k6 load testing. ProjectStream was Spring Boot end to end. I like the 
          DevOps and SRE side of engineering: the part where code meets infrastructure and has to survive contact with production.
          <br />
          <br />
          Authorized to work in Canada, looking for the next team to build with.
        </p>
      </div>
    </div>
  );
}

export default Banner