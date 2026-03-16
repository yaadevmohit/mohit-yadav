
// border-[#003566]
const Hero = () => {
  return (
    <main className="w-full my-3 flex flex-col lg:flex-row items-center gap-4 md:p-4 bg-gray-50 md:bg-gray-200 rounded-xl nunitoRegular">
        <img src="./IMG_1368.jpeg" className="md:w-[400px] object-contain grayscale-75 md:h-full rounded-xl" alt="Mohit Yadav in sunglasses" />
        <div className="flex flex-col md:p-4 md:mx-4 m-w-3xl gap-3">
            <h1 
              className="text-4xl text-left text-[#003566] md:text-6xl font-bold w-full nunitoBlack"
            >
              Hi, I'm Mohit Yadav
            </h1>
            
            <h2
              className="text-2xl text-red-600 text-left md:text-3xl w-full mb-2 nunitoBold" 
            >
             Full-Stack Developer based in Toronto  
            </h2>
            <hr />
            <p 
              className="text-lg  text-left md:mx-2 md:my-4 p-4 customYellowBgRing nunitoRegular"
            >
              I am a Full-Stack Developer specializing in building dynamic web applications with React, Express, and TypeScript. My expertise lies in creating responsive user interfaces and robust backend systems that scale effectively. With a strong command of SQL, I design efficient database schemas to support data-driven applications. I am passionate about writing clean, maintainable code and leveraging modern tools to solve complex problems. Constantly exploring new technologies, I strive to deliver high-quality solutions that enhance user experience. From concept to deployment, I am dedicated to crafting software that makes a difference.
            </p>
            <a 
              href="mailto:mohityadav530@gmail.com" 
              target="_blank" 
              className="group flex gap-2 justify-center 
                       bg-black w-fit mx-auto 
                       text-white px-4 py-3 rounded-2xl 
                       cursor-pointer
                       hover:bg-black/80 
                       "
              >
                Get in touch now
              <div className="relative h-5 w-5 mt-0.4 text-xl overflow-hidden">
                <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-7">
                  <span>&#8594;</span>
                  <span>&#8594;</span>
                </div>
              </div> 
            </a>
      </div>
    </main>
  )
}

export default Hero