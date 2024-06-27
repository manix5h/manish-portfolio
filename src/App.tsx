import Starfield from 'react-starfield';
import './App.css'


import { Navbar } from './components/Navbar';

import { HeroSection } from './components/HeroSection';
import { Skills } from './components/Skills';

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

         

     
   
    </div>
  )
}

export default App

