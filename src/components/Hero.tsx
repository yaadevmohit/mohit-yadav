import { ReactTyped } from "react-typed"

const Hero = () => {
  return (
    <main className="md:bg-amber-200 w-full md:my-12 my-3 flex flex-col lg:flex-row items-center gap-4 md:p-4 rounded-2xl">
        <img src="src/assets/IMG_1368.JPG" className="md:w-[400px] rounded-4xl" alt="" />
        <div className="flex flex-col md:p-4 md:mx-4 m-w-3xl">
            <h1 
              className="text-5xl text-blue-700 md:text-6xl lgmy-4 font-bold w-full m-2 nunitoBold"
            >
              Mohit Yadav
            </h1>
            
            <h2
              className="text-2xl text-orange-700 md:text-3xl lgmy-4 font-semibold w-full m-2 nunitoSemiBold" 
            >
              <ReactTyped
                strings={["Web Developer", "React Expert", "Creative Coder"]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </h2>
            <hr />
            <p 
              className="text-lg  text-left md:mx-2 md:my-4 nunitoRegular"
            >
                A passionate software developer specializing in building exceptional digital experiences. Currently, I'm focused on developing responsive full-stack web applications.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, rerum quas eius sunt vero saepe quibusdam possimus laborum modi temporibus placeat non aperiam quidem illo ullam voluptate rem quo in!
              <br />Je sais pas comment faire franchement.
            </p>
            <ul className="flex my-2 mx-auto space-x-3">
              <li className="nunitoBold my-0 underline hover:scale-110"><a href="">linkedIn</a></li>
              <li className="nunitoBold my-0 underline hover:scale-110"><a href="">github</a></li>
              <li className="nunitoBold my-0 underline hover:scale-110"><a href="">email me</a></li>
            </ul>
        </div>
    </main>
  )
}

export default Hero