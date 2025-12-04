import { heroData } from "../assets/profileData";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="w-full md:my-12 my-3 flex flex-col lg:flex-row items-center gap-4 md:p-4 border-[#003566] md:border-4">
        <motion.img src={heroData.profileImg} className="md:w-[400px]" alt="" initial={{ scale: 0 }} animate={{ scale: 1 }}/>
        <div className="flex flex-col md:p-4 md:mx-4 m-w-3xl">
            <h1 
              className="text-4xl 
                text-left 
                text-[#003566] 
                md:text-6xl 
                font-bold 
                w-full 
                nunitoBlack"
            >
              {heroData.mainHeading}
            </h1>
            
            <h2
              className="text-2xl 
                       text-red-600 
                       text-left 
                       md:text-3xl 
                       w-full 
                       mb-2 
                       nunitoBold" 
            >
              {heroData.subHeading} 
            </h2>
            <hr />
            <p 
              className="text-lg
                        text-left 
                        md:mx-2 
                        md:my-4 
                        p-4 
                        customYellowBgRing 
                        nunitoRegular"
            >
              {heroData.description}
            </p>
        </div>
    </main>
  )
}

export default Hero