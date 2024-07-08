import Starfield from 'react-starfield';
import './App.css'


import { Navbar } from './components/Navbar';

import { HeroSection } from './components/HeroSection';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {


  return (
    <div className=''>
      <Starfield
      starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.050}
        backgroundColor="black"
      ></Starfield>
         <Navbar/>
        <HeroSection/>

        <div>
        <Skills/>
        </div>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>

         

     
   
    </div>
  )
}

export default App

