import Starfield from 'react-starfield';
import './App.css'


import { Navbar } from './components/Navbar';

import { HeroSection } from './components/HeroSection';

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

         

     
   
    </div>
  )
}

export default App

