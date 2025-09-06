import Image from 'next/image'
import profilePic from '../public/img/profilepic.jpg'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 wrapper">
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
          Software Developer
        </h3>
        <p className="text-base tracking-wide pt-3 text-center md:text-left">
          A Software Developer with a strong foundation in Computer Science and
          hands-on experience in building web applications, CRMs, and
          project management tools. Skilled in full-stack development using
          modern frameworks and passionate about designing intuitive, scalable,
          and maintainable software. Eager to contribute technical expertise,
          creativity, and problem-solving skills to a collaborative development
          team while continuously learning and adopting emerging technologies.
        </p>
      </div>
    </div>
  );
}

export default Banner