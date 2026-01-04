import { motion } from "framer-motion";

type HeroProps = {
  data: {
    mainHeading: string;
    subHeading: string;
    description: string;
    profileImg: { src: string; alt: string };
  };
};

const Hero = ({ data }: HeroProps) => {
  
  const { mainHeading, subHeading, description, profileImg } = data;


  return (
    <main className="w-full md:my-12 my-3 flex flex-col lg:flex-row items-center gap-4 md:p-4 border-[#003566] md:border-8 rounded-2xl">
      <motion.img
        src={profileImg.src}
        alt={profileImg.alt}
        className="md:w-[400px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />
      <div className="flex flex-col md:p-4 md:mx-4 max-w-3xl">
        <h1 className="nunitoBlack text-4xl text-left text-[#003566] md:text-6xl font-bold w-full">
          {mainHeading}
        </h1>

        <h2 className="nunitoBold text-2xl text-red-600 text-left md:text-3xl w-full mb-2">
          {subHeading}
        </h2>

        <hr />

        <p className="nunitoRegular text-lg text-left md:mx-2 md:my-4 p-4 customYellowBgRing">
          {description}
        </p>
      </div>
    </main>
  )
}

export default Hero