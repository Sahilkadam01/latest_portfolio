import React from 'react'
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from './components/page_loader/Loader'
import ProfileSection from './components/profile_section/ProfileSection'
import WhoIAm from './components/Who-i-am/Who-i-am'
import Projects from "./components/projects/Projects"
import Skills from './components/skills_section/Skills'
import Contact from './components/contact_section/Contact'
import Navbar from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Achievements from "./components/achivements/Achivements"


function App() {

const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // duration of loader

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
      
    
    <main className="main-section bg-black">
      
      <Navbar/>
   <section className="profile" id="profile" >
    <ProfileSection/>
    </section>   
   <section className="who-i-am" id="about" >
    <WhoIAm/> 
    </section>
       
   <section className='projects-section' id="projects">
    <Projects/>
   </section>
  <section className='skills-section' id="skills" >
    <Skills/>
  </section>
  <section className='achivements-section' id="achivement" >
    <Achievements/>
  </section>

   <section className="contact-section" id="contact" >
    <Contact/>
   </section>
   <Footer/>
   </main>
   )}
   </>
  )
}

export default App