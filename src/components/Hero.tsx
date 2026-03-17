
// border-[#003566]
const Hero = () => {
  return (
    <main className="w-full my-3 flex flex-col lg:flex-row items-center gap-4 md:p-4 md:bg-gray-200 rounded-xl nunitoRegular mb-9">
        <img src="./IMG_1369.JPG" className="md:w-[400px] object-contain md:h-full rounded-xl" alt="Mohit Yadav in sunglasses" />
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
              className="text-lg text-left md:mx-1 md:mb-4  rounded-xl nunitoRegular"
            >
              A full-stack developer focused on building clean web applications with React and TypeScript, with Express on the backend. Currently open to new opportunities and deepening my backend knowledge. If you have a project in mind, reach out.
            </p>
            <hr />
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