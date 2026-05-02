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
   <ProfileSection/>
   <WhoIAm/>     
   <section className='projects-section'>
    <Projects/>
   </section>
  <section className='skills-section'>
    <Skills/>
  </section>
   <section className="contact-section">
    <Contact/>
   </section>

   </main>
   )}
   </>
  )
}

export default App