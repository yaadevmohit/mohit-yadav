const Hero = () => {
  return (
    <main className="my-16 p-4 w-6xl flex flex-row space-between border">
        <img src="src/assets/IMG_1368.JPG" className="w-90 rounded-2xl" alt="" />
        <div className="flex flex-col text-left p-4 mx-4 m-w-3xl">
            <h1 className="text-5xl my-4 font-bold w-full">Hi, I'm Mohit Yadav</h1>
            <p className="text-lg text-left">
                A passionate software developer specializing in building exceptional digital experiences. Currently, I'm focused on developing responsive full-stack web applications.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, rerum quas eius sunt vero saepe quibusdam possimus laborum modi temporibus placeat non aperiam quidem illo ullam voluptate rem quo in!
            </p>
        </div>
    </main>
  )
}

export default Hero