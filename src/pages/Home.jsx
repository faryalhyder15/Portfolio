import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
const Home=() => {
    return (
        <div>
            <Hero />
            <About/>
            <Skills/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default Home