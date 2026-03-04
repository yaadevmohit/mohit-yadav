

const Hero = () => {
  return (
    <main className="w-full md:my-12 my-3 flex flex-col lg:flex-row items-center gap-4 md:p-4 border-[#003566] md:border-8 rounded-2xl">
        <img src="./IMG_1368.JPG" className="md:w-[400px] rounded-xl" alt="Mohit Yadav in sunglasses" />
        <div className="flex flex-col md:p-4 md:mx-4 m-w-3xl">
            <h1 
              className="text-4xl text-left text-[#003566] md:text-6xl font-bold w-full nunitoBlack"
            >
              Hi, I'm Mohit Yadav
            </h1>
            
            <h2
              className="text-2xl text-red-600 text-left md:text-3xl w-full mb-2 nunitoBold" 
            >
             Data Engineer based in Toronto  
            </h2>
            <hr />
            <p 
              className="text-lg  text-left md:mx-2 md:my-4 p-4 customYellowBgRing nunitoRegular"
            >
            Data Integration Specialist with 5 years of experience designing and implementing robust ETL/ELT pipelines. Proficient in optimizing data workflows, ensuring data integrity, and managing high-volume migrations across cloud and on-premises environments. Proven track record of reducing processing times and collaborating with cross-functional teams to deliver clean, structured data for business intelligence and advanced analytics.
            </p>
        </div>
    </main>
  )
}

export default Hero