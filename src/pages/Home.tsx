import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NavBar from "../components/Navbar"
import {Routes, Route } from "react-router-dom"
import Projects from "../components/Projects"
import { Social } from "../components/Social"

export default function Home() {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Hero />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/social" element={<Social />}/>             
            </Routes>
            <Footer /> 
        </>
    )
}