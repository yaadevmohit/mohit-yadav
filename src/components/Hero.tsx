const Hero = () => {
  return (
    <main className="w-full md:my-12 my-3 flex flex-col lg:flex-row items-center gap-4 md:p-4 border-[#003566] md:border-4">
        <img src="./IMG_1368.JPG" className="md:w-[400px]" alt="" />
        <div className="flex flex-col md:p-4 md:mx-4 m-w-3xl">
            <h1 
              className="text-4xl text-left text-[#003566] md:text-6xl font-bold w-full nunitoBlack"
            >
              Hi, I'm Mohit Yadav.
            </h1>
            
            <h2
              className="text-2xl text-red-600 text-left md:text-3xl w-full mb-2 nunitoBold" 
            >
             Web Developer based in Toronto.  
            </h2>
            <hr />
            <p 
              className="text-lg  text-left md:mx-2 md:my-4 p-4 customYellowBgRing nunitoRegular"
            >
              A web developer passionate about crafting fast, accessible, and visually engaging digital experiences.
              I specialize in building responsive full-stack web applications using modern technologies like React, Node.js, and Tailwind CSS.
              I love turning ideas into interactive, meaningful solutions that make an impact.
            </p>
        </div>
    </main>
  )
}

export default Hero