import Hero from "../components/Hero";
// import NavBar from "../components/Navbar";
import { heroData } from "../assets/profileData";
const Home = () => {
  return (
   <>
    <Hero data={heroData}/>
  </>
  )
}

export default Home;